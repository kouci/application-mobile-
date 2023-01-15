import 'react-native-url-polyfill/auto';
import { createClient } from "@supabase/supabase-js";

// ! Le Code de ce fichier n'est pas à changer hormis sur la branche master 

const supabase = createClient(
    "https://tbdokxnspzyipuaevygb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiZG9reG5zcHp5aXB1YWV2eWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0NTU5OTksImV4cCI6MTk4NzAzMTk5OX0.MLZUtr30gK-5klCzXcjfzx6lTb1_Cia0lQ5GsX5AJLc"
);

export default supabase;