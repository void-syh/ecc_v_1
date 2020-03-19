$(function () {
    var site = 'http://server.fingerchinese.com:8083';
    var seaText = "";
    var word_data;
    var word_phrase;
    var phrase_data;
    var page = 1;
    var page_all;
    var isHiden1 = true;
    var writer4;
    var seatext; 
	function jieshou() {
	    var twoText = window.location.href;
	    var twodata = twoText.split("="); //截取 url中的“=”,获得“=”后面的参数
	    var twoText = decodeURI(twodata[1]); //decodeURI解码
	
	    $(".search1").val(twoText);
	    if (document.getElementById("search1").value.length == 1) {
	        page = 1;
	        chahanzi1();
	        chahanzi3();
	        $(".four").css("display", "none");
	        $(".one").css("display", "block");
	        $(".two").css("display", "none");
	        $(".three").css("display", "none");
	        var content = document.getElementById("character-target-div1");
	        while (content.hasChildNodes()) {
	            content.removeChild(content.firstChild)
	        }
	        var content = document.getElementById("character-target-div2");
	        while (content.hasChildNodes()) {
	            content.removeChild(content.firstChild)
	        }
	        var content = document.getElementById("character-target-div3");
	        while (content.hasChildNodes()) {
	            content.removeChild(content.firstChild)
	        }
	        var content = document.getElementById("character-target-div4");
	        while (content.hasChildNodes()) {
	            content.removeChild(content.firstChild)
	        }
	
	    } else {
	        if (document.getElementById("search1").value.length == 2) {
	            chahanzi2();
	            $(".four").css("display", "none");
	            $(".one").css("display", "none");
	            $(".two").css("display", "block");
	            $(".three").css("display", "none");
	            var content = document.getElementById("character-target-div10");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div20");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div30");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div40");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div11");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div21");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div31");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div41");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	        }
	        if (document.getElementById("search1").value.length == 3) {
	            chahanzi2();
	            $(".four").css("display", "none");
	            $(".one").css("display", "none");
	            $(".two").css("display", "none");
	            $(".three").css("display", "block");
	            var content = document.getElementById("character-target-div100");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div101");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div102");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div200");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div201");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div202");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div300");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div301");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div302");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div400");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div401");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div402");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	        }
	
	        if (document.getElementById("search1").value.length == 4) {
	            chahanzi2();
	            $(".four").css("display", "block");
	            $(".one").css("display", "none");
	            $(".two").css("display", "none");
	            $(".three").css("display", "none");
	            var content = document.getElementById("character-target-div1000");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div1001");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div1002");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div1003");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div2000");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div2001");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div2002");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div2003");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div3000");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div3001");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div3002");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div3003");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div4000");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div4001");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div4002");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	            var content = document.getElementById("character-target-div4003");
	            while (content.hasChildNodes()) {
	                content.removeChild(content.firstChild)
	            }
	        }
	    }
	
	}
	
	jieshou();
    $("#search1").keydown(function(e) {
        if (e.keyCode == 13) {
            if (!/^[\u4e00-\u9fa5]+$/gi.test(document.getElementById("search1").value))
                alert("You can only Input Chinese Characters");
            else {
                if (document.getElementById("search1").value.length == 1) {
                    page = 1;
                    chahanzi1();
                    chahanzi3();
                    $(".four").css("display", "none");
                    $(".one").css("display", "block");
                    $(".two").css("display", "none");
                    $(".three").css("display", "none");
                    var content = document.getElementById("character-target-div1");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div2");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div3");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div4");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }

                } else {
                    if (document.getElementById("search1").value.length == 2) {
                        chahanzi2();
                        $(".four").css("display", "none");
                        $(".one").css("display", "none");
                        $(".two").css("display", "block");
                        $(".three").css("display", "none");
                        var content = document.getElementById("character-target-div10");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div20");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div30");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div40");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div11");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div21");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div31");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div41");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                    }
                    if (document.getElementById("search1").value.length == 3) {
                        chahanzi2();
                        $(".four").css("display", "none");
                        $(".one").css("display", "none");
                        $(".two").css("display", "none");
                        $(".three").css("display", "block");
                        var content = document.getElementById("character-target-div100");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div101");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div102");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div200");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div201");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div202");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div300");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div301");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div302");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div400");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div401");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div402");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                    }

                    if (document.getElementById("search1").value.length == 4) {
                        chahanzi2();
                        $(".four").css("display", "block");
                        $(".one").css("display", "none");
                        $(".two").css("display", "none");
                        $(".three").css("display", "none");
                        var content = document.getElementById("character-target-div1000");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div1001");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div1002");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div1003");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div2000");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div2001");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div2002");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div2003");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div3000");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div3001");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div3002");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div3003");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div4000");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div4001");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div4002");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                        var content = document.getElementById("character-target-div4003");
                        while (content.hasChildNodes()) {
                            content.removeChild(content.firstChild)
                        }
                    }
                }

            }
        }
    });
	function quchu(){
		$(".search1").val(null);
	}
	quchu();
    $(".button_search").click(function () {
        if (!/^[\u4e00-\u9fa5]+$/gi.test(document.getElementById("search1").value))
            alert("You can only Input Chinese Characters");
        else {
            if (document.getElementById("search1").value.length == 1) {
                page = 1;
                chahanzi1();
                chahanzi3();
                $(".four").css("display", "none");
                $(".one").css("display", "block");
                $(".two").css("display", "none");
                $(".three").css("display", "none");
                var content = document.getElementById("character-target-div1");
                while (content.hasChildNodes()) {
                    content.removeChild(content.firstChild)
                }
                var content = document.getElementById("character-target-div2");
                while (content.hasChildNodes()) {
                    content.removeChild(content.firstChild)
                }
                var content = document.getElementById("character-target-div3");
                while (content.hasChildNodes()) {
                    content.removeChild(content.firstChild)
                }
                var content = document.getElementById("character-target-div4");
                while (content.hasChildNodes()) {
                    content.removeChild(content.firstChild)
                }

            } else {
                if (document.getElementById("search1").value.length == 2) {
                    chahanzi2();
                    $(".four").css("display", "none");
                    $(".one").css("display", "none");
                    $(".two").css("display", "block");
                    $(".three").css("display", "none");
                    var content = document.getElementById("character-target-div10");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div20");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div30");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div40");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div11");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div21");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div31");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div41");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                }
                if (document.getElementById("search1").value.length == 3) {
                    chahanzi2();
                    $(".four").css("display", "none");
                    $(".one").css("display", "none");
                    $(".two").css("display", "none");
                    $(".three").css("display", "block");
                    var content = document.getElementById("character-target-div100");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div101");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div102");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div200");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div201");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div202");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div300");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div301");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div302");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div400");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div401");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div402");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                }

                if (document.getElementById("search1").value.length == 4) {
                    chahanzi2();
                    $(".four").css("display", "block");
                    $(".one").css("display", "none");
                    $(".two").css("display", "none");
                    $(".three").css("display", "none");
                    var content = document.getElementById("character-target-div1000");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div1001");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div1002");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div1003");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div2000");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div2001");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div2002");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div2003");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div3000");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div3001");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div3002");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div3003");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div4000");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div4001");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div4002");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                    var content = document.getElementById("character-target-div4003");
                    while (content.hasChildNodes()) {
                        content.removeChild(content.firstChild)
                    }
                }
            }

        }
    });

    $(".previous").click(function () {
        if (page > 1)
            page--;
        else
            alert("It's already the first page");
        chahanzi3();
        var t = $('#phrase_all').offset().top;//  获取需要跳转到标签的top值
        $(window).scrollTop(t);// 跳转到指定位置
    });

    $(".next").click(function () {
        if (page < page_all)
            page++;
        else
            alert("It's already the last page");
        chahanzi3();
        var t = $('#phrase_all').offset().top;//  获取需要跳转到标签的top值
        $(window).scrollTop(t);// 跳转到指定位置
    });

    function chahanzi1() {
        seatext = $(".search1").val();
        console.log(seatext);
        $.ajax({
            type: 'GET',
            url: site + '/dictionary/search/' + seatext,
            crossDomain: true,
            dataType: "json",
            success: function (data) {
                if(data.status==100)
                {
                    word_data = data.data;
                    showInfo1();
                    $(".one-image").attr("src", "img/dictionary/chinese/" + seatext + ".jpg")
                }
                else
                {
                    alert("查无此字");
                }
            },
            error: function (e) {
                console.log(e);
            }
        });
    }

    function chahanzi2() {
        seatext = $(".search1").val();
        $.ajax({
            type: 'GET',
            url: site + '/dictionary/search/' + seatext,
            crossDomain: true,
            dataType: "json",
            success: function (data) {
                if(data.status==100) {
                    phrase_data = data.data;
                    showInfo2();
                }
                else
                {
                    alert("查无此词");
                }
            },
            error: function (e) {
                console.log(e);
            }
        });
    }

    function chahanzi3() {
        seatext = $(".search1").val();
        $.ajax({
            type: 'GET',
            url: site + '/dictionary/search/phrase/' + seatext,
            crossDomain: true,
            data: {
                pageNum: page,
                pageSize: 5,
            },
            dataType: "json",
            success: function (data) {
                word_phrase = data.data;
                page_all = word_phrase.pages;
                showInfo3();
            },
            error: function (e) {
                console.log(e);
            }
        });
    }

    function showInfo1() {
        var writer1 = HanziWriter.create('character-target-div1', word_data.name, {
            width: 200,
            height: 200,
            padding: 5
        });
        var writer2 = HanziWriter.create('character-target-div2', word_data.name, {
            width: 140,
            height: 140,
            padding: 5
        });
        var writer3 = HanziWriter.create('character-target-div3', word_data.name, {
            width: 150,
            height: 150,
            padding: 5
        });
        writer4 = HanziWriter.create('character-target-div4', word_data.name, {
            width: 200,
            height: 200,
            padding: 5
        });
        writer4.quiz();
        document.getElementById('animate-button1').addEventListener('click', function () {
            writer1.animateCharacter();
        });
        document.getElementById('animate-button2').addEventListener('click', function () {
            writer2.animateCharacter();
        });
        document.getElementById('animate-button3').addEventListener('click', function () {
            writer3.animateCharacter();
        });
        var english = word_data.english;
        var radical = word_data.radical;
        var Strokes = word_data.numbersOfStokes;
        var hzStructure = word_data.cncStruct;
        var Constituents = word_data.shapeCode;
        var Structure = word_data.eccStruct;
        var Code = word_data.eccCode;
        var pinyin = word_data.pinyin;
        var pinyin_split = pinyin.split("&");
        var pinyins = "";
        var pinyinm ="<div>";
        for (var i = 0; i < pinyin_split.length; i++) {
            pinyins += "<div class='audio_checked'><b>" + pinyin_split[i] + "</b>" +
                "<a><img style='height:20px' src='img/audio.jpg'></a>" +
                "</div>";
            pinyinm += "<span class='audio_checked'><b>" + pinyin_split[i] + "</b>" +
                "<a><img style='height:20px' src='img/audio.jpg'></a>" +
                "</span>";
        }
        pinyinm+="</div>"
        $(".basic-content").html(english);
        $(".phrase-head").html("Phrase and Sentence");
        $(".Information").css("display", "block");
        $(".radical").html(radical);
        $(".Strokes").html(Strokes);
        $(".hzStructure").html(hzStructure);
        $(".Constituents").html(Constituents);
        $(".Structure").html(Structure);
        $(".Code").html(Code);
        $(".chinese_pinyin_one").html(pinyins);
        $(".chinese_pinyin_one_m").html(pinyinm);
    }

    function audio_show(audio_flag)
    {
        var pinyin_temp=word_data.pinyin;
        var audio_pinyin_temp=word_data.pinyinAudio;
        var pinyin=pinyin_temp.split("&");
        var audio_pinyin=audio_pinyin_temp.split("&");
        var audio_data=audio_pinyin[parseInt(audio_flag)];
        $("audio").attr("src","./audio/"+audio_data+".mp3");
    }
    $(".chinese_pinyin_one").on("click","div",function () {
        var classname=$(this).html();
        var ii=$(this).index();
        audio_show(ii);
    });
    $(".chinese_pinyin_one_m").on("click","span",function () {
        var classname=$(this).html();
        var ii=$(this).index();
        audio_show(ii);
    });
    function showInfo3() {
        var i, j;
        var phrase = word_phrase.list;
        var word_phrase_all = '<ol>';
        var word_phrase_height = 1;
        var word_phrase_height_m = 1;
        console.log(word_phrase.size)
        for (i = 0; i < word_phrase.size; i++) {
            word_phrase_all += '<li>' + phrase[i].phrase + phrase[i].english + '</li>' + '<ol>';
            for (j = 0; j < phrase[i].sentenceList.length; j++) {
                word_phrase_all += '<li>' + zhupinyin(phrase[i].sentenceList[j].sentence, phrase[i].sentenceList[j].pinyin) + '</li>' + phrase[i].sentenceList[j].english;
                word_phrase_height += 2;
                word_phrase_height_m += 4;
            }
            word_phrase_height++;
            word_phrase_height_m += 2;
            word_phrase_all += '</ol>';
        }
        word_phrase_all += '</ol>';
        word_phrase_height *= 35;
        word_phrase_height += 40;
        word_phrase_height_m *= 35;
        word_phrase_height_m += 40;
        $(".phrase-content").css("height", word_phrase_height + 'px');
        $(".phrase-content-m").css("height", word_phrase_height_m + 'px');
        $(".phrase-content-all").html(word_phrase_all);
        $(".phrase-button").css("display", "block");
    }

    function showInfo2() {
        var i = 0;
        console.log(seaText);
        seatext = $(".search1").val();
        var seaText = seatext.split("");
        var english = phrase_data.english;
        var sentence = phrase_data.sentenceList;
        var sentence_content_all = '<ol>';
        var sentence_height_m = 0;
        var sentence_height = 0;
        $(".basic-content").html(english);
        var writer10 = HanziWriter.create('character-target-div10', seaText[0], {
            width: 150,
            height: 150,
            padding: 5
        });
        var writer11 = HanziWriter.create('character-target-div11', seaText[1], {
            width: 150,
            height: 150,
            padding: 5
        });

        function chainAnimations10() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer10.hideCharacter();
            writer11.hideCharacter();

            writer10.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer11.animateCharacter();
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button10').addEventListener('click', chainAnimations10);
        var writer20 = HanziWriter.create('character-target-div20', seaText[0], {
            width: 130,
            height: 130,
            padding: 5
        });
        var writer21 = HanziWriter.create('character-target-div21', seaText[1], {
            width: 130,
            height: 130,
            padding: 5
        });

        function chainAnimations20() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer20.hideCharacter();
            writer21.hideCharacter();

            writer20.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer21.animateCharacter();
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button20').addEventListener('click', chainAnimations20);
        var writer30 = HanziWriter.create('character-target-div30', seaText[0], {
            width: 200,
            height: 200,
            padding: 5
        });
        var writer31 = HanziWriter.create('character-target-div31', seaText[1], {
            width: 200,
            height: 200,
            padding: 5
        });

        function chainAnimations30() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer30.hideCharacter();
            writer31.hideCharacter();

            writer30.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer31.animateCharacter();
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button30').addEventListener('click', chainAnimations30);
        var writer40 = HanziWriter.create('character-target-div40', seaText[0], {
            width: 140,
            height: 140,
            padding: 5
        });
        var writer41 = HanziWriter.create('character-target-div41', seaText[1], {
            width: 140,
            height: 140,
            padding: 5
        });

        function chainAnimations40() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer40.hideCharacter();
            writer41.hideCharacter();

            writer40.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer41.animateCharacter();
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button40').addEventListener('click', chainAnimations40);
        var writer100 = HanziWriter.create('character-target-div100', seaText[0], {
            width: 150,
            height: 150,
            padding: 5
        });
        var writer101 = HanziWriter.create('character-target-div101', seaText[1], {
            width: 150,
            height: 150,
            padding: 5
        });
        var writer102 = HanziWriter.create('character-target-div102', seaText[2], {
            width: 150,
            height: 150,
            padding: 5
        });

        function chainAnimations100() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer100.hideCharacter();
            writer101.hideCharacter();
            writer102.hideCharacter();
            writer100.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer101.animateCharacter({
                            onComplete: function () {
                                setTimeout(function () {
                                    writer102.animateCharacter();
                                }, delayBetweenAnimations);
                            }
                        });
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button100').addEventListener('click', chainAnimations100);
        var writer200 = HanziWriter.create('character-target-div200', seaText[0], {
            width: 130,
            height: 130,
            padding: 5
        });
        var writer201 = HanziWriter.create('character-target-div201', seaText[1], {
            width: 130,
            height: 130,
            padding: 5
        });
        var writer202 = HanziWriter.create('character-target-div202', seaText[2], {
            width: 130,
            height: 130,
            padding: 5
        });

        function chainAnimations200() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer200.hideCharacter();
            writer201.hideCharacter();
            writer202.hideCharacter();
            writer200.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer201.animateCharacter({
                            onComplete: function () {
                                setTimeout(function () {
                                    writer202.animateCharacter();
                                }, delayBetweenAnimations);
                            }
                        });
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button200').addEventListener('click', chainAnimations200);
        var writer300 = HanziWriter.create('character-target-div300', seaText[0], {
            width: 160,
            height: 160,
            padding: 5
        });
        var writer301 = HanziWriter.create('character-target-div301', seaText[1], {
            width: 160,
            height: 160,
            padding: 5
        });
        var writer302 = HanziWriter.create('character-target-div302', seaText[2], {
            width: 160,
            height: 160,
            padding: 5
        });

        function chainAnimations300() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer300.hideCharacter();
            writer301.hideCharacter();
            writer302.hideCharacter();
            writer300.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer301.animateCharacter({
                            onComplete: function () {
                                setTimeout(function () {
                                    writer302.animateCharacter();
                                }, delayBetweenAnimations);
                            }
                        });
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button300').addEventListener('click', chainAnimations300);
        var writer400 = HanziWriter.create('character-target-div400', seaText[0], {
            width: 140,
            height: 140,
            padding: 5
        });
        var writer401 = HanziWriter.create('character-target-div401', seaText[1], {
            width: 140,
            height: 140,
            padding: 5
        });
        var writer402 = HanziWriter.create('character-target-div402', seaText[2], {
            width: 140,
            height: 140,
            padding: 5
        });

        function chainAnimations400() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer400.hideCharacter();
            writer401.hideCharacter();
            writer402.hideCharacter();
            writer400.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer401.animateCharacter({
                            onComplete: function () {
                                setTimeout(function () {
                                    writer402.animateCharacter();
                                }, delayBetweenAnimations);
                            }
                        });
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button400').addEventListener('click', chainAnimations400);

        var writer1000 = HanziWriter.create('character-target-div1000', seaText[0], {
            width: 120,
            height: 120,
            padding: 5
        });
        var writer1001 = HanziWriter.create('character-target-div1001', seaText[1], {
            width: 120,
            height: 120,
            padding: 5
        });
        var writer1002 = HanziWriter.create('character-target-div1002', seaText[2], {
            width: 120,
            height: 120,
            padding: 5
        });
        var writer1003 = HanziWriter.create('character-target-div1003', seaText[3], {
            width: 120,
            height: 120,
            padding: 5
        });

        function chainAnimations1000() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer1000.hideCharacter();
            writer1001.hideCharacter();
            writer1002.hideCharacter();
            writer1003.hideCharacter();
            writer1000.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer1001.animateCharacter({
                            onComplete: function () {
                                setTimeout(function () {
                                    writer1002.animateCharacter({
                                        onComplete: function () {
                                            setTimeout(function () {
                                                writer1003.animateCharacter();
                                            }, delayBetweenAnimations);
                                        }
                                        }
                                    );
                                }, delayBetweenAnimations);
                            }
                        });
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button1000').addEventListener('click', chainAnimations1000);
        var writer2000 = HanziWriter.create('character-target-div2000', seaText[0], {
            width: 100,
            height: 100,
            padding: 5
        });
        var writer2001 = HanziWriter.create('character-target-div2001', seaText[1], {
            width: 100,
            height: 100,
            padding: 5
        });
        var writer2002 = HanziWriter.create('character-target-div2002', seaText[2], {
            width: 100,
            height: 100,
            padding: 5
        });
        var writer2003 = HanziWriter.create('character-target-div2003', seaText[3], {
            width: 100,
            height: 100,
            padding: 5
        });

        function chainAnimations2000() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer2000.hideCharacter();
            writer2001.hideCharacter();
            writer2002.hideCharacter();
            writer2003.hideCharacter();
            writer2000.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer2001.animateCharacter({
                            onComplete: function () {
                                setTimeout(function () {
                                    writer2002.animateCharacter({
                                            onComplete: function () {
                                                setTimeout(function () {
                                                    writer2003.animateCharacter();
                                                }, delayBetweenAnimations);
                                            }
                                        }
                                    );
                                }, delayBetweenAnimations);
                            }
                        });
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button2000').addEventListener('click', chainAnimations2000);
        var writer3000 = HanziWriter.create('character-target-div3000', seaText[0], {
            width: 120,
            height: 120,
            padding: 5
        });
        var writer3001 = HanziWriter.create('character-target-div3001', seaText[1], {
            width: 120,
            height: 120,
            padding: 5
        });
        var writer3002 = HanziWriter.create('character-target-div3002', seaText[2], {
            width: 120,
            height: 120,
            padding: 5
        });
        var writer3003 = HanziWriter.create('character-target-div3003', seaText[3], {
            width: 120,
            height: 120,
            padding: 5
        });

        function chainAnimations3000() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer3000.hideCharacter();
            writer3001.hideCharacter();
            writer3002.hideCharacter();
            writer3003.hideCharacter();
            writer3000.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer3001.animateCharacter({
                            onComplete: function () {
                                setTimeout(function () {
                                    writer3002.animateCharacter({
                                            onComplete: function () {
                                                setTimeout(function () {
                                                    writer3003.animateCharacter();
                                                }, delayBetweenAnimations);
                                            }
                                        }
                                    );
                                }, delayBetweenAnimations);
                            }
                        });
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button3000').addEventListener('click', chainAnimations3000);
        var writer4000 = HanziWriter.create('character-target-div4000', seaText[0], {
            width: 100,
            height: 100,
            padding: 5
        });
        var writer4001 = HanziWriter.create('character-target-div4001', seaText[1], {
            width: 100,
            height: 100,
            padding: 5
        });
        var writer4002 = HanziWriter.create('character-target-div4002', seaText[2], {
            width: 100,
            height: 100,
            padding: 5
        });
        var writer4003 = HanziWriter.create('character-target-div4003', seaText[3], {
            width: 100,
            height: 100,
            padding: 5
        });

        function chainAnimations4000() {
            var delayBetweenAnimations = 1000; // milliseconds
            writer4000.hideCharacter();
            writer4001.hideCharacter();
            writer4002.hideCharacter();
            writer4003.hideCharacter();
            writer4000.animateCharacter({
                onComplete: function () {
                    setTimeout(function () {
                        writer4001.animateCharacter({
                            onComplete: function () {
                                setTimeout(function () {
                                    writer4002.animateCharacter({
                                            onComplete: function () {
                                                setTimeout(function () {
                                                    writer4003.animateCharacter();
                                                }, delayBetweenAnimations);
                                            }
                                        }
                                    );
                                }, delayBetweenAnimations);
                            }
                        });
                    }, delayBetweenAnimations);
                }
            });
        }

        document.getElementById('animate-button4000').addEventListener('click', chainAnimations4000);
        for (i = 0; i < sentence.length; i++) {
            sentence_content_all += '<li>' + zhupinyin(sentence[i].sentence, sentence[i].pinyin) + '</li>' + sentence[i].english;
            sentence_height++;
            sentence_height_m++;
        }
        sentence_content_all += '</ol>';
        sentence_height *= 76;
        sentence_height_m *= 100;
        $(".phrase-head").html("Sentence");
        $(".phrase-content").css("height", sentence_height + 'px');
        $(".phrase-content-m").css("height", sentence_height_m + 'px');
        $(".phrase-content-all").html(sentence_content_all);
        $(".phrase-button").css("display", "none");
        $(".Information").css("display", "none");
    }

    function zhupinyin(hanzi, pinyin) {
        var chinese_pinyin = "<ruby>";
        var re = /^[\u4e00-\u9fa5]+$/;
        if (pinyin) {
            var pinyin_split = pinyin.split(" ");
            for (var i = 0; i < pinyin_split.length; i++) {
                if (re.test(hanzi[i])) {
                    chinese_pinyin += hanzi[i] + "<rt>" + pinyin_split[i] + "</rt>";
                    console.log();
                } else
                    chinese_pinyin += hanzi[i] + "<rt></rt>";
            }
            chinese_pinyin += "</ruby>";
        } else {
            for (var i = 0; i < hanzi.length; i++) {
                if (re.test(hanzi[i]))
                    chinese_pinyin += hanzi[i] + "<rt>null</rt>";
                else
                    chinese_pinyin += hanzi[i] + "<rt></rt>";
            }
            chinese_pinyin += "</ruby>";
        }
        return chinese_pinyin;
    }

    $(".write").click(function () {
        if (isHiden1) {
            $(".write_hua").animate({top: '+=400px'});
            $(".write_hua").css("background", "white");
            isHiden1 = !isHiden1;
        }
    });
    $(".close").click(function () {
        if (!isHiden1) {
            $(".write_hua").animate({top: '-=400px'});
            $(".write_hua").css("background", "white");
            isHiden1 = !isHiden1;
        }
    });
    $('#quiz-reset').on('click', function (evt) {
        evt.preventDefault();
        writer4.quiz();
    });
});
