import 'react-native-url-polyfill/auto';
import { createClient } from "@supabase/supabase-js";
import {REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY} from '@env';


const supabase = createClient(
    REACT_APP_SUPABASE_URL,
    REACT_APP_SUPABASE_ANON_KEY
);
  

export default supabase;