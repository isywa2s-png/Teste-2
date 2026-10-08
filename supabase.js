import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Configurações e credenciais do Supabase
const SUPABASE_URL = 'https://jwwlcbimfigxdvmlbpwm.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_HmLWfiMFdU_r_MOvtfwwOQ_r5KmaQRa';

// Inicialização do cliente Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);