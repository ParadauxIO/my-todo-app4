import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://whxzfohobuhcpkntgdqx.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoeHpmb2hvYnVoY3BrbnRnZHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMDMzMTEsImV4cCI6MTk5MzY3OTMxMX0.5HcihVqaVzKzg3rwksaF8mg4C4P9k8CWtSLjjENdkmM"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})