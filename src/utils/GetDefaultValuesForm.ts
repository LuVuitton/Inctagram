export const GetDefaultValuesForm = async () => {
  let data;
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    const response = await fetch("https://inctagram.work/api/v1/users/profile", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    data = await response.json();
  }

  return {
    userName: data?.userName!,
    firstName: data?.firstName!,
    lastName: data?.lastName!,
    city: data?.city!,
    aboutMe: data?.aboutMe!,
  };
};
