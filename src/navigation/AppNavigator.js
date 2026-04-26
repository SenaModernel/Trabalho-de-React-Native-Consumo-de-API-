import React, { createContext, useContext, useState, useMemo, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const NavigationContext = createContext(null);

export function useNavigation() {
  return useContext(NavigationContext);
}

export default function AppNavigator({ screens, initialRoute }) {
  const [stack, setStack] = useState([{ name: initialRoute, params: {} }]);
  const [headerOptions, setHeaderOptions] = useState({});

  const current = stack[stack.length - 1];
  const options = headerOptions[current.name] || {};

  // Ref to always point to the current screen name without changing navigation reference
  const currentNameRef = useRef(current.name);
  currentNameRef.current = current.name;

  // Stable navigation object — never changes reference, so useLayoutEffect doesn't loop
  const navigation = useMemo(() => ({
    navigate: (name, params = {}) => {
      setStack((prev) => [...prev, { name, params }]);
    },
    replace: (name, params = {}) => {
      setStack((prev) => [...prev.slice(0, -1), { name, params }]);
    },
    goBack: () => {
      setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    },
    setOptions: (opts) => {
      const name = currentNameRef.current;
      setHeaderOptions((prev) => ({
        ...prev,
        [name]: { ...(prev[name] || {}), ...opts },
      }));
    },
  }), []); // Empty deps: navigation object created once, never recreated

  const ScreenComponent = screens[current.name];
  const showHeader = options.headerShown !== false;
  const canGoBack = stack.length > 1;

  return (
    <NavigationContext.Provider value={navigation}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        {showHeader && (
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              {options.headerLeft ? (
                options.headerLeft()
              ) : canGoBack ? (
                <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
                  <Text style={styles.backText}>← Voltar</Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <Text style={styles.headerTitle} numberOfLines={1}>
              {options.title || current.name}
            </Text>
            <View style={styles.headerRight}>
              {options.headerRight ? options.headerRight() : null}
            </View>
          </View>
        )}
        <View style={styles.screenContainer}>
          {ScreenComponent && (
            <ScreenComponent
              navigation={navigation}
              route={{ params: current.params }}
            />
          )}
        </View>
      </SafeAreaView>
    </NavigationContext.Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 8,
  },
  headerLeft: {
    width: 80,
    alignItems: 'flex-start',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  headerRight: {
    width: 80,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 8,
  },
  backText: {
    color: '#007AFF',
    fontSize: 16,
  },
  screenContainer: {
    flex: 1,
  },
});
