
import { getWeddingContents } from "../adapters/contents";
import Manila from "./diamond/Manila";
import Shanghai from "./diamond/Shanghai";
import Tokyo from "./diamond/Tokyo";
import Chonburi from "./gold/Chonburi";
import Pattaya from "./gold/Pattaya";
import ChiangMai from "./platinum/ChiangMai";
import Fukuoka from "./platinum/Fukuoka";
import Songkhla from "./platinum/Songkhla";

export const templateAll = {
    'p01': (data) => {
        return <ChiangMai contents={getWeddingContents(data)} />
    },
    'p02': (data) => {
        return <Pattaya contents={getWeddingContents(data)} />
    },
    'p03': (data) => {
        return <Chonburi contents={getWeddingContents(data)} />
    },
    'p04': (data) => {
        return <Songkhla contents={getWeddingContents(data)} />
    },
    'p05': (data) => {
        return <Manila contents={getWeddingContents(data)} />
    },
    'p06': (data) => {
        return <Shanghai contents={getWeddingContents(data)} />
    },
    'p07': (data) => {
        return <Tokyo contents={getWeddingContents(data)} />
    },
    'p08': (data) => {
        return <Fukuoka contents={getWeddingContents(data)} />
    },
}

export const templateAllDefault = {
    "chiangmai": (data) => {
        return <ChiangMai contents={data} />
    },
    "pattaya": (data) => {
        return <Pattaya contents={data} />
    },
    "chonburi": (data) => {
        return <Chonburi contents={data} />
    },
    "songkhla": (data) => {
        return <Songkhla contents={data} />
    },
    "manila": (data) => {
        return <Manila contents={data} />
    },
    "shanghai": (data) => {
        return <Shanghai contents={data} />
    },
    "tokyo": (data) => {
        return <Tokyo contents={data} />
    },
    "fukuoka": (data) => {
        return <Fukuoka contents={data} />
    },
}

// still haven't implemented on 'ContentFour' component in landing page into slider part
export const templateMetaData = [
    {
        name:"ChiangMai",
        type:"platinum",
        slug:"/preview/chiangmai",
        img:"../../public/static/landing/mokap1.png"
    },
    {
        name:"Pattaya",
        type:"gold",
        slug:"/preview/pattaya",
        img:"../../public/static/landing/mokap2.png"
    },
    {
        name:"Chonburi",
        type:"gold",
        slug:"/preview/chonburi",
        img:"../../public/static/landing/mokap3.png"
    },
    {
        name:"Songkhla",
        type:"platinum",
        slug:"/preview/songkhla",
        img:"../../public/static/landing/mokap4.png"
    },
    {
        name:"Manila",
        type:"diamond",
        slug:"/preview/manila",
        img:"../../public/static/landing/mokap5.png"
    },
    {
        name:"Shanghai",
        type:"diamond",
        slug:"/preview/shanghai",
        img:"../../public/static/landing/mokap6.png"
    },
    {
        name:"Tokyo",
        type:"diamond",
        slug:"/preview/tokyo",
        img:"../../public/static/landing/mokap7.png"
    },
    {
        name:"Fukuoka",
        type:"platinum",
        slug:"/preview/fukuoka",
        img:"../../public/static/landing/mokap8.png"
    },
]