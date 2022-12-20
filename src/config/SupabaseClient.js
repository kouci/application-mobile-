import 'react-native-url-polyfill/auto';
import { createClient } from "@supabase/supabase-js";
import {REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY} from '@env';

// ! Le Code de ce fichier n'est pas à changer hormis sur la branche master 

const supabase = createClient(
    REACT_APP_SUPABASE_URL,
    REACT_APP_SUPABASE_ANON_KEY
);
  

export default supabase;