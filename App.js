import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './components/views/Auth';
import HomeView from './components/views/HomeView';
import { supabase } from './state/supabase';

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        (session && session.user) ? <HomeView/> : <Auth/>
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
},
});