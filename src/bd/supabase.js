import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kjlvwdzkjrlkftwbmgos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqbHZ3ZHpranJsa2Z0d2JtZ29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMDc5NzMsImV4cCI6MjA1NDY4Mzk3M30.0bQNIeX6X4nntSgQtnQg44OtFxR6e1ghUuHVJeyg3ns'
export const supabase = createClient(supabaseUrl, supabaseKey)