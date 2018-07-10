<!-- START PORTFOLIO
========================================================================== -->
<section id="portfolio" class="portfolio section-main section-padding section">
    <div class="container">

        <!-- START SECTION HEADING -->
        <div class="section-heading text-center">
            <h2 class="wow">Projects portfolio</h2>
            
        </div>
        <!-- END SECTION HEADING -->

        <div data-portfolio-url="portfolio/for-ajax-load/more-portfolio.html" data-action="portfolio">

            <div class="row">
                <div class="col-sm-12">

                    <!-- START PORTFOLIO FILTER -->
            
                    <!-- END PORTFOLIO FILTER -->

                </div><!-- /.col-sm-12 -->
            </div><!-- /.row -->

            <div class="row">

                <!-- START PORTFOLIO ITEMS -->
                <div class="protfolio-items">

                    <!-- START SINGLE PORTFOLIO ITEM WITH CONTENT POPUP AND ATTACHMENT PREVIEW -->
                    <div id="portfolio-01" class="col-xxs-12 col-xs-12 col-sm-4 col-md-4 single-portfolio">
                        <div class="portfolio-item wow fadeInUpSmall">
                                <a href="portfolio/single-pages/portfolio-single-04.html">
                                    <!-- PORTFOLIO IMAGE -->
                                <img src="https://i.imgur.com/TYpTone.png" alt="portfolio-thumb-1">
                                
                                <!-- PORTFOLIO TEXT -->
                                <div class="portfolio-text">
                                    <h4>Solo project: Expensur</h4>
                                    <h5>This was the main page for an expense app. It was my first attempt at building a web app
                                        with React.js and Redux.
                                    </h5>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- START SINGLE PORTFOLIO ITEM WITH DETAILS PAGE ( STYLE 1 ) -->
                    <div id="portfolio-02" class="col-xxs-12 col-xs-12 col-sm-4 col-md-4 single-portfolio art design accessories">
                        <div class="portfolio-item wow fadeInUpSmall" data-wow-delay=".1s">
                            <a href="portfolio/single-pages/portfolio-single-01.html">
                                <!-- PORTFOLIO IMAGE -->
                                <img src="https://i.imgur.com/55AvOqg.png" alt="portfolio-thumb-2">
                                
                                <!-- PORTFOLIO TEXT -->
                                <div class="portfolio-text">
                                    <i class="zmdi zmdi-plus"></i>
                                    <h4>Victory Bicycle Website</h4>
                                    <h5>The first Website I ever made. This was built and designed with HTML 5 and CSS only.</h5>
                                </div>
                            </a>
                        </div>
                    </div><!-- /.col-xxs-12 col-xs-12 col-sm-4 col-md-4 -->

                    <!-- START SINGLE PORTFOLIO ITEM WITH DETAILS PAGE ( STYLE 2 ) -->
                    <div id="portfolio-03" class="col-xxs-12 col-xs-12 col-sm-4 col-md-4 single-portfolio art fashon">
                        <div class="portfolio-item wow fadeInUpSmall" data-wow-delay=".2s">
                                <a href="portfolio/single-pages/portfolio-single-03.html">
                                    <!-- PORTFOLIO IMAGE -->
                                 <img src="https://i.imgur.com/7mKcjme.png" alt="portfolio-thumb-2">
                                <!-- PORTFOLIO TEXT -->

                                <div class="portfolio-text">
                                    <i class="zmdi zmdi-plus"></i>
                                    <h4>Movie Database web app</h4>
                                    <h5>This was created with AngularJS and Material UI. This is the main page for adding movies to the movie database app. I didn't get to finish the app yet,
                                        but I had a lot of fun making this and plan to rebuild it in React.
                                    </h5>
                                </div>
                            </a>
                        </div>
                    </div><!-- /.col-xxs-12 col-xs-12 col-sm-4 col-md-4 -->

                    <!-- START SINGLE PORTFOLIO ITEM WITH DETAILS PAGE ( STYLE 3 ) -->
                    <div id="portfolio-04" class="col-xxs-12 col-xs-12 col-sm-4 col-md-4 single-portfolio art accessories fashon">
                        <div class="portfolio-item wow fadeInUpSmall">
                            <a href="portfolio/single-pages/portfolio-single-03.html">
                                <!-- PORTFOLIO IMAGE -->
                                <img src="https://i.imgur.com/M7HHwgM.png" alt="portfolio-thumb-4">
                                
                                <!-- PORTFOLIO TEXT -->
                                <div class="portfolio-text">
                                    <i class="zmdi zmdi-plus"></i>
                                    <h4>The MEAN Stack</h4>
                                    <h5>My first fullstack application using Mongo and Angular</h5>
                                </div>
                            </a>
                        </div>
                    </div><!-- /.col-xxs-12 col-xs-12 col-sm-4 col-md-4 -->

                    <!-- START SINGLE PORTFOLIO ITEM WITH IMAGE POPUP GALLERY -->
                    <div id="portfolio-05" class="col-xxs-12 col-xs-12 col-sm-4 col-md-4 single-portfolio art accessories">
                        <div class="portfolio-item wow fadeInUpSmall">
                           <img id="myImg" src="img/salcalc.png" alt="project capture" style="width:100%;max-width:300px">

                  
                            
                                <!-- PORTFOLIO TEXT -->
                                <div class="portfolio-text">
                                    <i class="zmdi zmdi-plus"></i>
                                   
                                </div>
                            </a>
                        </div>
                        <!-- The Modal -->
                        <div id="myModal" class="modal">
                           
                           <!-- The Close Button -->
                           <span class="close">&times;</span>
                         
                           <!-- Modal Content (The Image) -->
                           <img class="modal-content" id="img01">
                         
                           <!-- Modal Caption (Image Text) -->
                           <div id="caption">Salary Calculator-jQuery and Express.
                                             <br />
                                             My first weekend assignment using jQuery and Express.
                           </div>
                         </div>

                         <script>
                         var modal = document.getElementById('myModal');

                             // Get the image and insert it inside the modal - use its "alt" text as a caption
                             var img = document.getElementById('myImg');
                             var modalImg = document.getElementById("img01");
                             var captionText = document.getElementById("caption");
                             img.onclick = function(){
                                 modal.style.display = "block";
                                 modalImg.src = this.src;
                                 captionText.innerHTML = this.alt;
                             }

                             // Get the <span> element that closes the modal
                             var span = document.getElementsByClassName("modal")[0];

                             // When the user clicks on <span> (x), close the modal
                             span.onclick = function() { 
                             modal.style.display = "none";

                             }
                             </script>
                    </div><!-- /.col-xxs-12 col-xs-12 col-sm-4 col-md-4 -->

                    <!-- START SINGLE PORTFOLIO ITEM WITH IMAGE POPUP GALLERY -->
                    <div id="portfolio-06" class="col-xxs-12 col-xs-12 col-sm-4 col-md-4 single-portfolio art design">
                        <div class="portfolio-item wow fadeInUpSmall" data-wow-delay=".2s">
                            <a href="img/portfolio/popup/portfolio2_popup.jpg" class="portfolio-default-popup">
                                <!-- PORTFOLIO IMAGE -->
                              
                                <!-- PORTFOLIO TEXT -->
                                <div class="portfolio-text">
                                    <i class="zmdi zmdi-plus"></i>
                                    <h4>Group Project for Reve Academy</h4>
                                    <h5>Branding</h5>
                                </div>
                            </a>
                        </div>
                    </div><!-- /.col-xxs-12 col-xs-12 col-sm-4 col-md-4 -->

                </div>
                <!-- END PORTFOLIO ITEMS -->

                <!-- Portfolio ajax div, it's a hidden div need for ajax loading -->
                <div data-action="portfolioInitItem" class="portfolio-ajax-hidden-div"></div>

                <!-- START PORTFOLIO LOAD MORE BUTTON -->
                <div class="load-portfolio text-center m-t-xxs-15 m-t-sm-45 wow fadeInUpSmall" data-wow-duration="1s">
                    <!-- Accent-colored raised button with ripple -->
                </div>
                <!-- END PORTFOLIO LOAD MORE BUTTON -->
                
            </div><!-- /.row -->
        </div>
    </div><!-- /.container -->
</section>
<!-- END PORTFO -->