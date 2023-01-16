import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ciywaqcxcocihxzeptlz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpeXdhcWN4Y29jaWh4emVwdGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1MTM5NzksImV4cCI6MTk4OTA4OTk3OX0.8m6XR-xZdgh9NvuvfxtziUOMn-71vF4Cw67Y-Lr5xhU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
