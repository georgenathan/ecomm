import React from 'react';


// const DarkMode = () => {
//   const [theme, setTheme] = React.useState(
//     localStorage.getItem("theme")? localStorage.getItem("thrmr")
//      : "light"
//      );

//      const element = document.documentElement;
//      console.log(element);

//      React.useEffect(() => {
//       localStorage.setItem("theme", theme);
//       if (theme === "dark") {
//         element.classList.add("dark");
//         element.classList.add("dark");
//       }else {
//         element.classList.remove("light");
//         element.classList.remove("dark");
//       }
//      })

//   return (
//     <div className='relative'>
//       <img 
//       onClick={() => setTheme(theme === "dark" ? "light" :
//       "dark")}
//       src="{Light}" 
//       alt="" 
//       className={`w-12 cursor-pointer absolute right-0 z-10 ${
//         theme === "dark"? "opacity-0" : "opacity-100"
//     } transition-all duration-300`} />
//     <img 
//     onClick={() => setTheme(theme === "dark" ? "light" :
//     "dark")}
//     src="{Dark}" 
//     alt="" 
//     className={`w-12 cursor-pointer `} />
//     </div>
//   )
// }

const DarkMode = () => {
  return (
    <div>
      <DarkMode/>
    </div>
  )
}

export default DarkMode