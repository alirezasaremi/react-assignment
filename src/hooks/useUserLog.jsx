import axios from "axios";

const useUserLog = () => {
  const logUserActivity = async (pageName, sectionName) => {
    await axios
      .post("/api/log", {
        page: pageName,
        section: sectionName,
        date: new Date(),
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return [logUserActivity];
};

export default useUserLog;
