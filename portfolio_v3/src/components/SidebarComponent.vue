<script>
import { RouterView } from 'vue-router';

    export default {
    data() {
        return {
            /* LIST OF NAVBAR LINKS -- ore */
            linkMissionText: "Mission",
            linkVoiceText: "Tone of voice",
            linkTrademarksText: "Trademarks",
            linkTypographyText: "Typography",
            linkColorsText: "Color",
            /* LIST OF NAVBAR LINKS -- Brand Elements */
            linkIconsText: "Icons",
            linkGridsText: "Grids",
            linkPhotographyText: "Photography",
            linkIllustrationText: "Illustration",
            linkMotionText: "Motion",
            linkSocialsText: "Social Media",
            /* PATHS TO NAVBAR ASSETS 
            sidebarBrandLogo: "/public/sidebar-logo.png",
            sidebarBrandIcon: "/public/sidebar-icon.png",*/
            }
        },
        methods: {
        
        },
        computed: {

        },
        components: {
        },
    }
</script>
<template>
    <!-- THIS IS THE SIDEBAR <- LEFT SIDE -- COMPONENT. -->
    <aside class="sidebar">
        <div class="sidebar-top">
            <div class="sidebar-brand">
                <!-- Router-link in logo -->
                <router-link to="/" class="sidebar-brand-link">
                    <img src="/sidebar-logo.png" alt="Brand Logo" class="sidebar-brand-logo" />
                </router-link>          
            </div>
            <div>
                <img src="/sidebar-icon.png" alt="Brand Icon" class="sidebar-brand-logo" />
            </div>
        </div>
        <div class="sidebar-body-block">
            <p class="txt-nt-100 sidebar-list-heading">Brand Statement</p>
            <ul class="sidebar-list">
                <li class="sidebar-listitem"><router-link to="/" class="sidebar-listitem-link router-link-active">{{ linkMissionText }}</router-link></li>
                <li class="sidebar-listitem"><router-link to="/voice" class="sidebar-listitem-link router-link-active">{{ linkVoiceText }}</router-link></li>        
            </ul>
        </div>
        <div class="sidebar-body-block">
            <p class="txt-nt-100 sidebar-list-heading">Brand Core</p>
            <ul class="sidebar-list">
                <li class="sidebar-listitem"><router-link to="/trademarks" class="sidebar-listitem-link router-link-active">{{ linkTrademarksText }}</router-link></li>
                <li class="sidebar-listitem"><router-link to="/typography" class="sidebar-listitem-link router-link-active">{{ linkTypographyText }}</router-link></li>
                <li class="sidebar-listitem"><router-link to="/color" class="sidebar-listitem-link router-link-active">{{ linkColorsText }}</router-link></li>        
       
            </ul>
        </div>
        <div class="sidebar-body-block">
            <p class="txt-nt-100 sidebar-list-heading">Brand Elements</p>
            <ul class="sidebar-list">
                <li class="sidebar-listitem"><router-link to="/icons" class="sidebar-listitem-link router-link-active">{{ linkIconsText }}</router-link></li>
                <li class="sidebar-listitem"><router-link to="/grids" class="sidebar-listitem-link router-link-active">{{ linkGridsText }}</router-link></li>                
                <li class="sidebar-listitem"><router-link to="/photography" class="sidebar-listitem-link router-link-active">{{ linkPhotographyText }}</router-link></li>
                <li class="sidebar-listitem"><router-link to="/illustration" class="sidebar-listitem-link router-link-active">{{ linkIllustrationText }}</router-link></li>                
                <li class="sidebar-listitem"><router-link to="/motion" class="sidebar-listitem-link router-link-active">{{ linkMotionText }}</router-link></li>                
                <!--<li class="sidebar-listitem"><a class="sidebar-listitem-link" href="#">Videography</a></li>-->
                <li class="sidebar-listitem"><router-link to="/socials" class="sidebar-listitem-link router-link-active">{{ linkSocialsText }}</router-link></li>                
                <!-- <li class="sidebar-listitem"><a class="sidebar-listitem-link" href="#">Product / CAD</a></li> -->
            </ul>
        </div>

        <!-- LEAVE FOR NOW NOT MVP --
        <div class="sidebar-body-block">
            <p class="txt-nt-100 sidebar-list-heading">Other</p>
            <ul class="sidebar-list">
                <li class="sidebar-listitem"><a class="sidebar-listitem-link" href="#">Wayfinding</a></li>
                <li class="sidebar-listitem"><a class="sidebar-listitem-link" href="#">Apparel</a></li>
            </ul>
        </div> -->

        <div class="sidebar-body-block">
            <p class="txt-nt-100 sidebar-list-heading">UI Components</p>
            <ul class="sidebar-list">
                <li class="sidebar-listitem"><a class="sidebar-listitem-link-off" href="#">Buttons / Links</a></li>
                <li class="sidebar-listitem"><a class="sidebar-listitem-link-off" href="#">Typescale</a></li>
            </ul>
        </div>
    </aside>
</template>

<style>

</style>