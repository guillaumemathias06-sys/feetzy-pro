import { PrismaClient } from "@prisma/client"; import bcrypt from "bcrypt";
const db=new PrismaClient();
async function run(){
  const france=await db.area.upsert({where:{slug:"france"},update:{},create:{name:"France",slug:"france",level:"COUNTRY"}});
  const sud=await db.area.upsert({where:{slug:"provence-alpes-cote-d-azur"},update:{},create:{name:"Provence-Alpes-Côte d’Azur",slug:"provence-alpes-cote-d-azur",level:"REGION",parentId:france.id}});
  const am=await db.area.upsert({where:{slug:"alpes-maritimes"},update:{},create:{name:"Alpes-Maritimes",slug:"alpes-maritimes",level:"DEPT",parentId:sud.id}});
  const nice=await db.area.upsert({where:{slug:"nice"},update:{},create:{name:"Nice",slug:"nice",level:"CITY",parentId:am.id}});
  const admin=await db.user.upsert({where:{email:"admin@feetzy.app"},update:{},create:{email:"admin@feetzy.app",name:"Admin",password:await bcrypt.hash("admin1234",10),role:"ADMIN",areaId:nice.id}});
  const partner=await db.user.upsert({where:{email:"partner@feetzy.app"},update:{},create:{email:"partner@feetzy.app",name:"Partner",password:await bcrypt.hash("partner1234",10),role:"PARTNER",areaId:nice.id}});
  const client=await db.user.upsert({where:{email:"client@feetzy.app"},update:{},create:{email:"client@feetzy.app",name:"Client",password:await bcrypt.hash("client1234",10),role:"CLIENT",areaId:nice.id}});
  const exp=await db.experience.create({data:{title:"Stage de padel – Initiation",slug:"stage-padel-initiation",short:"Découvrez les bases du padel avec un coach.",description:"Prises, déplacements, vitres, services et retours.",category:"Padel",city:"Nice",status:"PUBLISHED",ownerId:partner.id,areaId:nice.id,image:"https://images.unsplash.com/photo-1617957743103-b6892fdcfc63?q=80&w=1600&auto=format&fit=crop",price:"25€ / personne",duration:"1h30",level:"Débutants"}});
  const now=new Date();
  await db.timeSlot.create({data:{experienceId:exp.id,start:new Date(now.getFullYear(),now.getMonth(),now.getDate()+3,18,0,0),end:new Date(now.getFullYear(),now.getMonth(),now.getDate()+3,19,30,0),capacity:8}});
  await db.experience.create({data:{title:"Tournoi amical de tennis – Double",slug:"tournoi-tennis-double",short:"Rencontres en double dans une ambiance fair-play.",description:"Poules + tableau, matches courts.",category:"Tennis",city:"Nice",status:"PUBLISHED",ownerId:partner.id,areaId:nice.id,image:"https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop",price:"15€ / joueur",duration:"Après-midi",level:"Tous niveaux"}});
  console.log("Seed done.");
} run().finally(()=>db.$disconnect());
