<template>
    <footer class="footer">
        <div class="footer-row">
            <div class="footer-left">
                <div class="location-col">
                    <p class="location-label txt-ss-body2">Find me</p>
                    <p class="location-text txt-ss-body1">Antwerp, Belgium</p>
                    <a  href="mailto:jan_huysmans@outlook.com" class="location-text txt-ss-body1">jan_huysmans@outlook.com</a>
                </div>
                <div class="socials-col">
                    <p class="social-label txt-ss-sub2 txt-nt-10">LINKEDIN</p>
                    <p class="social-label txt-ss-sub2 txt-nt-10 mt-xs">INSTAGRAM</p>
                </div>
            </div>
            <div class="footer-right">
                <ul class="footer-links-list mt-md">
                    <li> <router-link to="/work" class="footer-link">
                        <span class="arrow-box"><img class="link-arrow" src="/assets/arrow-right.png" /></span>Work
                    </router-link></li>
                    <li><router-link to="/about" class="footer-link">
                        <span class="arrow-box"><img class="link-arrow" src="/assets/arrow-right.png" /></span>About
                    </router-link></li>
                    <li><router-link to="/archive" class="footer-link">
                        <span class="arrow-box"><img class="link-arrow" src="/assets/arrow-right.png" /></span>Archive
                    </router-link>
                    </li>   
                </ul>
            </div>
        </div>
        <div class="footer-row-bottom mb-xs">
            <div class="divider-thick mt-xs mb-xs"></div>
            <ul class="footer-navlist">
                <li class="footer-navlistitem"><a class="footer-navlink txt-ss-body2" href="">&copy; 2024
                        JAN HUYSMANS</a></li>
                <li class="footer-navlistitem"><a class="footer-navlink txt-ss-body2" href="">Privacy policy</a>
                </li>
                <li class="footer-navlistitem"><a class="footer-navlink txt-ss-body2" href="">EASTER EGG</a></li>
            </ul>
        </div>
    </footer>
    <div>
    </div>
</template>