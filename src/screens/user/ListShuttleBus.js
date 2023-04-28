import React, { useEffect, useState } from 'react';
import {FaBus} from "react-icons/fa"
import ShutleBusTable from '../../components/ShuttleBusTable';

export default function ListShuttleBus() {
  const[ListBus,setListBus] = useState(
    [
    {
      id:1,
      LocFrom:"Bách Khoa",
      LocTo:"FVille",
      depTime:"08h05",
      listLoc:[
        {
          locName: "Cổng trường đại học Bách Khoa",
          time: "08h05"  
        },
        {
          locName: "Cổng BigC Trần Duy Hưng",
          time: "08h15"  
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "09h00"  
        },
      ]
    },
    {
      id:2,
      LocFrom:"Bách Khoa",
      LocTo:"FVille",
      depTime:"08h30",
      listLoc:[
        {
          locName: "Cổng trường đại học Bách Khoa",
          time: "08h30"  
        },
        {
          locName: "Cổng BigC Trần Duy Hưng",
          time: "08h45"  
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "09h30"  
        }
      ]
    },
    {
      id:3,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"08h15",
      listLoc:[
        {
          locName: "FPT Tower - Phạm Văn Bạch",
          time: "08h15"  
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "09h15"  
        }
      ]
    },
    {
      id:4,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"08h15",
      listLoc:[
        {
          locName: "FPT Cầu Giấy - 17 Duy Tân",
          time: "08h15"  
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "09h15"  
        }
      ]
    },
    {
      id:5,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"08h30",
      listLoc:[
        {
          locName: "FPT Tower - Phạm Văn Bạch",
          time: "08h30"  
        },
        {
          locName: "FPT Cầu Giấy - 17 Duy Tân",
          time: "08h45" 
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "09h45"  
        }
      ]
    },
    {
      id:6,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"09h00",
      listLoc:[
        {
          locName: "FPT Tower - Phạm Văn Bạch",
          time: "09h00"  
        },
        {
          locName: "FPT Cầu Giấy - 17 Duy Tân",
          time: "09h15" 
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "10h15"  
        }
      ]
    },
    {
      id:7,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"09h30",
      listLoc:[
        {
          locName: "FPT Tower - Phạm Văn Bạch",
          time: "09h30"  
        },
        {
          locName: "FPT Cầu Giấy - 17 Duy Tân",
          time: "09h45" 
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "10h45"  
        }
      ]
    },
    {
      id:8,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"10h00",
      listLoc:
      [
        {
          locName: "FPT Tower - Phạm Văn Bạch",
          time: "10h00"  
        },
        {
          locName: "FPT Cầu Giấy - 17 Duy Tân",
          time: "10h15" 
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "11h15"  
        }
      ]
    },
    {
      id:9,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"10h30",
      listLoc:[
        {
          locName: "FPT Tower - Phạm Văn Bạch",
          time: "10h30"  
        },
        {
          locName: "FPT Cầu Giấy - 17 Duy Tân",
          time: "10h45" 
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "11h45"  
        }
      ]
    },
    {
      id:10,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"11h00",
      listLoc:[
        {
          locName: "FPT Tower - Phạm Văn Bạch",
          time: "11h00"  
        },
        {
          locName: "FPT Cầu Giấy - 17 Duy Tân",
          time: "11h15" 
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "12h15"  
        }
      ]
    },
    {
      id:11,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"11h30",
      listLoc:[
        {
          locName: "FPT Tower - Phạm Văn Bạch",
          time: "11h30"  
        },
        {
          locName: "FPT Cầu Giấy - 17 Duy Tân",
          time: "11h45" 
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "12h45"  
        }
      ]
    },
    {
      id:12,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"12h00",
      listLoc:[
        {
          locName: "FPT Tower - Phạm Văn Bạch",
          time: "12h00"  
        },
        {
          locName: "FPT Cầu Giấy - 17 Duy Tân",
          time: "12h15" 
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "13h15"  
        }
      ]
    },
    {
      id:13,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"12h30",
      listLoc:[
        {
          locName: "FPT Tower - Phạm Văn Bạch",
          time: "12h30"  
        },
        {
          locName: "FPT Cầu Giấy - 17 Duy Tân",
          time: "12h45" 
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "13h45"  
        }
      ]
    },
    {
      id:14,
      LocFrom:"Cầu Giấy",
      LocTo:"FVille",
      depTime:"13h00",
      listLoc:[
        {
          locName: "FPT Tower - Phạm Văn Bạch",
          time: "13h00"  
        },
        {
          locName: "FPT Cầu Giấy - 17 Duy Tân",
          time: "13h15" 
        },
        {
          locName: "Fville1/Fville2-Hòa Lạc",
          time: "14h15"  
        }
      ]
    },
    ]
  );
  const[ListLoc,setListLoc] = useState([]);
  useEffect(()=>{
    setListLoc(ListBus.map((shuttleBus)=> shuttleBus.LocFrom).filter((loc,index,list) => {
        return list.findIndex((e) => e === loc) === index;
     }))
  }
  ,[ListBus])
  return (
    <div className="container-fluid list-shuttle-conntainer">
    <div className='list-shuttle-header' style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"4vh",marginBottom:"4vh"}}>
        <FaBus className='text-center' color='#f27328'/>
        <strong style={{marginLeft:"5px",fontSize:"25px",color:"#f27328"}}>List Shuttle Bus</strong>
    </div>
    <div className="list-shuttle-bus-body">
      {ListLoc.map((e,index)=> {return <ShutleBusTable key={index} title = {e} list = {ListBus.filter((bus) => { return bus.LocFrom === e})} />})}
    </div>
    </div>
  )
}
