import supabase from "../config/SupabaseClient";

export async function addToFavorite(auserId, aactivityId) {
  const { data, selectError } = await supabase
    .from("User-activities")
    .select()
    .eq("activityId", aactivityId)
    .eq("userId", auserId);

  console.log(data);
  if (data.length == 0) {
    const { error } = await supabase
      .from("User-activities")
      .insert({
        userId: auserId,
        activityId: aactivityId,
        isFavorite: true,
        isHistorique: false,
      });
    if (error) {
      console.error(error);
    }
  }
}

export async function deleteFavActivity(userId, activityId){
  const { error } = await supabase
  .from('User-activities')
  .delete()
  .eq('userId', userId)
  .eq('activityId', activityId)

  console.log(error)
}

export async function getActivitiesFavorites(auserId){
  const { data, selectError } = await supabase
    .from("User-activities")
    .select(' *, Activity( *)')
    .eq("isFavorite", true)
    .eq("userId", auserId);

  return data.Activity

  
}
