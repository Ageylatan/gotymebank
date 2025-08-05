import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kqxllbahzyahmutdykvi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxeGxsYmFoenl6aG11dGR5a3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MjQ1NjYsImV4cCI6MjA0OTAwMDU2Nn0.k2O4G8VllWS--nJwgZX7eLsC_jY4-9YP1hj2z4I4qOg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)