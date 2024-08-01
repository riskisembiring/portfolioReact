import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/kiki.jpeg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import { Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons';

export default function Home({innerRef}) {

   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(110vh - 120px)'} id={'home'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '38vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName} {info.lastName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2 className={Style.marqueeText}>I'm {info.position}.</h2>
            <h2 style={{paddingTop: '4%'}}><Button onClick={() => {downloadPdf()}} type="primary" shape="round" icon={<DownloadOutlined />}>Download CV</Button></h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}

function downloadPdf() {
   const pdfPath = 'example.pdf';

   fetch(pdfPath)
     .then(response => response.blob())
     .then(blob => {
       const url = 'https://drive.google.com/file/d/1ow5hZhgZuVcVDqhmtnhGUyl0Lw0wN2_E/view?usp=drive_link';
       const a = document.createElement('a');
       a.style.display = 'none';
       a.href = url;
       a.download = 'example.pdf'; // Nama file yang akan diunduh
       document.body.appendChild(a);
       a.click();
       window.URL.revokeObjectURL(url);
     })
     .catch(error => console.error('Error downloading PDF:', error));
 }