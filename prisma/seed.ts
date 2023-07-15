import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const luke = await prisma.character.upsert({
    where: { name: 'Luke Skywalker' },
    update: {},
    create: {
      name: 'Luke Skywalker',
    },
  })

  const c3po = await prisma.character.upsert({
    where: { name: 'C-3PO' },
    update: {},
    create: {
      name: 'C-3PO',
    },
  })  

  const r2d2 = await prisma.character.upsert({
    where: { name: 'R2-D2' },
    update: {},
    create: {
      name: 'R2-D2',
    },
  })

  const darth = await prisma.character.upsert({
    where: { name: 'Darth Vader' },
    update: {},
    create: {
      name: 'Darth Vader',
    },
  })  

  const leia = await prisma.character.upsert({
    where: { name: 'Leia Organa' },
    update: {},
    create: {
      name: 'Leia Organa',
    },
  })  

  const owen = await prisma.character.upsert({
    where: { name: 'Owen Lars' },
    update: {},
    create: {
      name: 'Owen Lars',
    },
  })

  const beru = await prisma.character.upsert({
    where: { name: 'Beru Whitesun Lars' },
    update: {},
    create: {
      name: 'Beru Whitesun Lars',
    },
  })  

  const r5d4 = await prisma.character.upsert({
    where: { name: 'R5-D4' },
    update: {},
    create: {
      name: 'R5-D4',
    },
  })  

  const biggs = await prisma.character.upsert({
    where: { name: 'Biggs Darklighter' },
    update: {},
    create: {
      name: 'Biggs Darklighter',
    },
  })  

  const obiwan = await prisma.character.upsert({
    where: { name: 'Obi-Wan Kenobi' },
    update: {},
    create: {
      name: 'Obi-Wan Kenobi',
    },
  })   
  
  const anakin = await prisma.character.upsert({
    where: { name: 'Anakin Skywalker' },
    update: {},
    create: {
      name: 'Anakin Skywalker',
    },
  })  

  const wilhuff = await prisma.character.upsert({
    where: { name: 'Wilhuff Tarkin' },
    update: {},
    create: {
      name: 'Wilhuff Tarkin',
    },
  })  

  const chewbacca = await prisma.character.upsert({
    where: { name: 'Chewbacca' },
    update: {},
    create: {
      name: 'Chewbacca',
    },
  })    

  const han = await prisma.character.upsert({
    where: { name: 'Han Solo' },
    update: {},
    create: {
      name: 'Han Solo',
    },
  })    

  const greedo = await prisma.character.upsert({
    where: { name: 'Greedo' },
    update: {},
    create: {
      name: 'Greedo',
    },
  })    

  const jabba = await prisma.character.upsert({
    where: { name: 'Jabba Desilijic Tiure' },
    update: {},
    create: {
      name: 'Jabba Desilijic Tiure',
    },
  })    

  const wedge = await prisma.character.upsert({
    where: { name: 'Wedge Antilles' },
    update: {},
    create: {
      name: 'Wedge Antilles',
    },
  })    

  const jek = await prisma.character.upsert({
    where: { name: 'Jek Tono Porkins' },
    update: {},
    create: {
      name: 'Jek Tono Porkins',
    },
  })    

  const palpatine = await prisma.character.upsert({
    where: { name: 'Palpatine' },
    update: {},
    create: {
      name: 'Palpatine',
    },
  })  
  
  const boba = await prisma.character.upsert({
    where: { name: 'Boba Fett' },
    update: {},
    create: {
      name: 'Boba Fett',
    },
  })    

  const ig88 = await prisma.character.upsert({
    where: { name: 'IG-88' },
    update: {},
    create: {
      name: 'IG-88',
    },
  })  
  
  const bossk = await prisma.character.upsert({
    where: { name: 'Bossk' },
    update: {},
    create: {
      name: 'Bossk',
    },
  })    

  const lando = await prisma.character.upsert({
    where: { name: 'Lando Calrissian' },
    update: {},
    create: {
      name: 'Lando Calrissian',
    },
  })   
  
  const lobot = await prisma.character.upsert({
    where: { name: 'Lobot' },
    update: {},
    create: {
      name: 'Lobot',
    },
  })    

  const ackbar = await prisma.character.upsert({
    where: { name: 'Ackbar' },
    update: {},
    create: {
      name: 'Ackbar',
    },
  })    

  const mon = await prisma.character.upsert({
    where: { name: 'Mon Mothma' },
    update: {},
    create: {
      name: 'Mon Mothma',
    },
  })    

  const arvel = await prisma.character.upsert({
    where: { name: 'Arvel Crynyd' },
    update: {},
    create: {
      name: 'Arvel Crynyd',
    },
  })    

  const wicket = await prisma.character.upsert({
    where: { name: 'Wicket Systri Warrick' },
    update: {},
    create: {
      name: 'Wicket Systri Warrick',
    },
  })    

  const nien = await prisma.character.upsert({
    where: { name: 'Nien Nunb' },
    update: {},
    create: {
      name: 'Nien Nunb',
    },
  })  

  const quigon = await prisma.character.upsert({
    where: { name: 'Qui-Gon Jinn' },
    update: {},
    create: {
      name: 'Qui-Gon Jinn',
    },
  })    

  const nute = await prisma.character.upsert({
    where: { name: 'Nute Gunray' },
    update: {},
    create: {
      name: 'Nute Gunray',
    },
  })  
  
  const finis = await prisma.character.upsert({
    where: { name: 'Finis Valorum' },
    update: {},
    create: {
      name: 'Finis Valorum',
    },
  })  
  
  const padme = await prisma.character.upsert({
    where: { name: `Padmé Amidala` },
    update: {},
    create: {
      name: `Padmé Amidala`,
    },
  })    

  const jarjar = await prisma.character.upsert({
    where: { name: 'Jar Jar Binks' },
    update: {},
    create: {
      name: 'Jar Jar Binks',
    },
  })    

  const roos = await prisma.character.upsert({
    where: { name: 'Roos Tarpals' },
    update: {},
    create: {
      name: 'Roos Tarpals',
    },
  })    

  const rugor = await prisma.character.upsert({
    where: { name: 'Rugor Nass' },
    update: {},
    create: {
      name: 'Rugor Nass',
    },
  })    

  const ric = await prisma.character.upsert({
    where: { name: `Ric Olié` },
    update: {},
    create: {
      name: `Ric Olié`,
    },
  })    

   const watto = await prisma.character.upsert({
    where: { name: 'Watto' },
    update: {},
    create: {
      name: 'Watto',
    },
  })   

  const sebulba = await prisma.character.upsert({
    where: { name: 'Sebulba' },
    update: {},
    create: {
      name: 'Sebulba',
    },
  })    
  console.log({ luke, c3po, r2d2, darth, leia, owen, beru, r5d4, biggs, obiwan, anakin, wilhuff, chewbacca, han, greedo, jabba, wedge, jek, palpatine, boba, ig88, bossk, lando, lobot, ackbar, mon, arvel, wicket, nien, quigon, nute, finis, padme, jarjar, roos, rugor, ric, watto,sebulba })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })