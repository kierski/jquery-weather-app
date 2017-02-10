"use strict";function showWeather(t){var e=$(".results"),a=t.weather[0].icon,n="http://openweathermap.org/img/w/"+a+".png",r=t.name,o=t.sys.country,s=Math.round(t.main.temp),i=Math.round(t.main.temp_max),d=t.weather[0].description,c=Math.round(t.main.pressure),p=Math.round(t.clouds.all),l=Math.round(t.wind.speed),u='\n  <div class="card text-center">\n    <div class="card-block">\n      <h4 class="card-title">'+r+", "+o+'</h4>\n      <div class="weather_icon">\n        <img src="'+n+'">\n      </div>\n\n      <p class="card-text">temp: <strong>'+s+"</strong> degs, temp max: <strong>"+i+'</strong> degs</p>\n      <p class="card-text">clouds: <strong>'+p+"</strong>, wind speed: <strong>"+l+'</strong></p>\n      <p class="card-text">weather: <strong>'+d+"</strong>, pressure: <strong>"+c+"</strong></p>\n    </div>\n  </div>\n  ";e.html(u)}var id=$("body").attr("id"),results=$(".results"),menuActive=function(){var t=$("nav.navbar ul li a");Array.prototype.forEach.call(t,function(t){var e=$(t).text();id===e&&$(t).parent().addClass("active")})},time=function(){var t=moment().format("MMM Do YYYY, h:mma"),e=$(".time h6");e.append(t)},weather=function(){if("capitals"===id){var t,e=$(".send");e.on("click",function(){var e=$("input").val();if(!e)return t='<div class="alert alert-danger" role="alert"><strong>Type name of city</strong></div>',void results.html(t);var a="http://api.openweathermap.org/data/2.5/weather?q="+e+"&mode=json&units=metric&appid=53fbad07bcfabedd0dda441894b94b3b";$.ajax({statusCode:{404:function(){t='<div class="alert alert-danger" role="alert"><strong>error</strong></div>',results.html(t)}},type:"GET",url:a,contentType:"application/json",dataType:"jsonp",success:function(t){showWeather(t)},error:function(t,e,a){console.log(t.status)}})})}},geolocationWeather=function(){"geolocation"===id&&$.getJSON("http://ipinfo.io",function(t){var e="http://api.openweathermap.org/data/2.5/weather?q="+t.city+"&mode=json&units=metric&appid=53fbad07bcfabedd0dda441894b94b3b";$.getJSON(e,function(t){showWeather(t)})})};menuActive(),time(),weather(),geolocationWeather();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic2hvd1dlYXRoZXIiLCJkYXRhIiwicmVzdWx0cyIsIiQiLCJpY29uQ29kZSIsIndlYXRoZXIiLCJpY29uIiwiaWNvblVybCIsImNpdHkiLCJuYW1lIiwiY291bnRyeSIsInN5cyIsInRlbXAiLCJNYXRoIiwicm91bmQiLCJtYWluIiwidGVtcE1heCIsInRlbXBfbWF4IiwiZGVzY3JpcHRpb24iLCJwcmVzc3VyZSIsImNsb3VkcyIsImFsbCIsIndpbmQiLCJzcGVlZCIsImNhcmQiLCJodG1sIiwiaWQiLCJhdHRyIiwibWVudUFjdGl2ZSIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJsaW5rcyIsImxpbmsiLCJ0eHQiLCJhZGRDbGFzcyIsInRpbWUiLCJtb21lbnQiLCJub3ciLCJlbCIsImJ0biIsIm9uIiwidmFsIiwiaW5wdXRWYWwiLCJtc2dFcnIiLCJ1cmwiLCJhamF4Iiwic3RhdHVzQ29kZSIsIjQwNCIsInR5cGUiLCJjb250ZW50VHlwZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsImVycm9yIiwieGhyIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImdlb2xvY2F0aW9uV2VhdGhlciIsImdldEpTT04iXSwibWFwcGluZ3MiOiJZQW9GQSxTQUFTQSxhQUFZQyxHQUNwQixHQUFJQyxHQUFVQyxFQUFFLFlBQ1pDLEVBQVdILEVBQUtJLFFBQVEsR0FBR0MsS0FDM0JDLEVBQVUsbUNBQXFDSCxFQUFXLE9BRTFESSxFQUFPUCxFQUFLUSxLQUNaQyxFQUFVVCxFQUFLVSxJQUFJRCxRQUNuQkUsRUFBT0MsS0FBS0MsTUFBTWIsRUFBS2MsS0FBS0gsTUFDNUJJLEVBQVVILEtBQUtDLE1BQU1iLEVBQUtjLEtBQUtFLFVBQy9CWixFQUFVSixFQUFLSSxRQUFRLEdBQUdhLFlBQzFCQyxFQUFXTixLQUFLQyxNQUFNYixFQUFLYyxLQUFLSSxVQUNoQ0MsRUFBU1AsS0FBS0MsTUFBTWIsRUFBS21CLE9BQU9DLEtBQ2hDQyxFQUFPVCxLQUFLQyxNQUFNYixFQUFLcUIsS0FBS0MsT0FHNUJDLEVBQUFBLGtHQUcwQmhCLEVBSDFCLEtBR21DRSxFQUhuQyw4REFLZUgsRUFMZixnRUFRc0NLLEVBUnRDLHFDQVErRUksRUFSL0Usa0VBU3dDSSxFQVR4QyxrQ0FTZ0ZFLEVBVGhGLDhEQVV5Q2pCLEVBVnpDLGdDQVVnRmMsRUFWaEYseUNBZUpqQixHQUFRdUIsS0FBS0QsR0FqSGQsR0FBQUUsSUFBQXZCLEVBQUEsUUFBQXdCLEtBQUEsTUFDSUQsUUFBT3ZCLEVBQUEsWUFHWHlCLFdBQUEsV0FDQSxHQUFJQSxHQUFBQSxFQUFBQSxxQkFHSEMsT0FBTUMsVUFBVUMsUUFBUUMsS0FBS0MsRUFBTyxTQUFVQyxHQUE5Q0wsR0FBQUEsR0FBTUMsRUFBQUEsR0FBVUMsTUFDWEksTUFBTWhDLEdBQ1ZBLEVBQUErQixHQUFJUixTQUFZVSxTQUFBLGFBTWxCQyxLQUFBLFdBQ0EsR0FBSUEsR0FBT0MsU0FBUEQsT0FBa0Isc0JBQ2hCRSxFQUFNRCxFQUFBQSxXQUNWRSxHQUFJQSxPQUFPRCxJQUlibEMsUUFBQSxXQUNBLEdBQUlBLGFBQUFBLEdBQUFBLENBQ0gsR0FDS29DLEdBRERmLEVBQU92QixFQUFBLFFBSVZzQyxHQUFJQyxHQUFHLFFBQVMsV0FBaEJELEdBQUlDLEdBQVl2QyxFQUFBLFNBQUF3QyxLQUdmLEtBQUtDLEVBRUoxQyxNQUZEMkMsR0FBQUEsNEZBQ0NBLFNBQUFBLEtBQUFBLEVBS0EsSUFBSUMsR0FBTSxvREFBc0RGLEVBQVcsZ0VBRTNFekMsR0FBRTRDLE1BQ0RDLFlBQ0NDLElBQUssV0FDSkosRUFBQUEsNEVBQ0EzQyxRQUFRdUIsS0FBS29CLEtBSWZLLEtBQU0sTUFDTkosSUFBS0EsRUFDTEssWUFBYSxtQkFDYkMsU0FBVSxRQUNWQyxRQUFTLFNBQUFwRCxHQUNSRCxZQUFZQyxJQUVicUQsTUFBTyxTQUFBQyxFQUFVQSxFQUFLQyxHQUNyQkMsUUFBUUMsSUFBSUgsRUFBSUMsZUFTbEJHLG1CQUFxQixXQUNiLGdCQUFQakMsSUFDSHZCLEVBQUV5RCxRQUFRLG1CQUFvQixTQUFVM0QsR0FDdkMsR0FBSTZDLEdBQU0sb0RBQXNEN0MsRUFBS08sS0FBTyxnRUFDNUVMLEdBQUV5RCxRQUFRZCxFQUFLLFNBQVU3QyxHQUN4QkQsWUFBWUMsT0FPaEIyQixjQUNBUyxPQUNBaEMsVUFDQXNEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGdsb2JhbCB2YXJzXG52YXIgaWQgPSAkKCdib2R5JykuYXR0cignaWQnKTtcbnZhciByZXN1bHRzID0gJCgnLnJlc3VsdHMnKTtcblxuLy8gd2hhdCBhIGluIG1lbnUgd2lsbCBiZSBjdXJyZW50XG52YXIgbWVudUFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGxpbmtzID0gJCgnbmF2Lm5hdmJhciB1bCBsaSBhJyk7XG5cblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW5rcywgZnVuY3Rpb24gKGxpbmspIHtcblx0XHR2YXIgdHh0ID0gJChsaW5rKS50ZXh0KCk7XG5cdFx0aWYgKGlkID09PSB0eHQpIHtcblx0XHRcdCQobGluaykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyB0aW1lXG52YXIgdGltZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbm93ID0gbW9tZW50KCkuZm9ybWF0KCdNTU0gRG8gWVlZWSwgaDptbWEnKTtcbiAgdmFyIGVsID0gJCgnLnRpbWUgaDYnKTtcbiAgZWwuYXBwZW5kKG5vdyk7XG59O1xuXG4vLyBmaW5kIG91dCBmb3JlY2FzdCBmb3IgY2l0eVxudmFyIHdlYXRoZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGlmIChpZCA9PT0gJ2NhcGl0YWxzJykge1xuXHRcdHZhciBidG4gPSAkKCcuc2VuZCcpO1xuXHRcdHZhciBtc2dFcnI7XG5cblx0XHRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGlucHV0VmFsID0gJCgnaW5wdXQnKS52YWwoKTtcblxuXHRcdFx0aWYgKCFpbnB1dFZhbCkge1xuXHRcdFx0XHRtc2dFcnIgPSBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPjxzdHJvbmc+VHlwZSBuYW1lIG9mIGNpdHk8L3N0cm9uZz48L2Rpdj5gO1xuXHRcdFx0XHRyZXN1bHRzLmh0bWwobXNnRXJyKTtcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdXJsID0gJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0nICsgaW5wdXRWYWwgKyAnJm1vZGU9anNvbiZ1bml0cz1tZXRyaWMnICsgJyZhcHBpZD01M2ZiYWQwN2JjZmFiZWRkMGRkYTQ0MTg5NGI5NGIzYic7XG5cblx0XHRcdFx0JC5hamF4KHtcblx0XHRcdFx0XHRzdGF0dXNDb2RlOiB7XG5cdFx0XHRcdFx0XHQ0MDQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0bXNnRXJyID0gYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj48c3Ryb25nPmVycm9yPC9zdHJvbmc+PC9kaXY+YDtcblx0XHRcdFx0XHRcdFx0cmVzdWx0cy5odG1sKG1zZ0Vycik7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0XHRcdHVybDogdXJsLFxuXHRcdFx0XHRcdGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcblx0XHRcdFx0XHRkYXRhVHlwZTogJ2pzb25wJyxcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRcdFx0c2hvd1dlYXRoZXIoZGF0YSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coeGhyLnN0YXR1cyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufTtcblxuLy8gc2hvdyB3ZWF0aGVyIHRvIGN1cnJlbnQgbG9jYXRpb25cbnZhciBnZW9sb2NhdGlvbldlYXRoZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGlmIChpZCA9PT0gJ2dlb2xvY2F0aW9uJykge1xuXHRcdCQuZ2V0SlNPTignaHR0cDovL2lwaW5mby5pbycsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHR2YXIgdXJsID0gJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0nICsgZGF0YS5jaXR5ICsgJyZtb2RlPWpzb24mdW5pdHM9bWV0cmljJyArICcmYXBwaWQ9NTNmYmFkMDdiY2ZhYmVkZDBkZGE0NDE4OTRiOTRiM2InO1xuXHRcdFx0JC5nZXRKU09OKHVybCwgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0c2hvd1dlYXRoZXIoZGF0YSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufTtcblxuLy8gaW5pdFxubWVudUFjdGl2ZSgpO1xudGltZSgpO1xud2VhdGhlcigpO1xuZ2VvbG9jYXRpb25XZWF0aGVyKCk7XG5cbi8vIHNob3cgd2VhdGhlciBmdW5jdGlvblxuZnVuY3Rpb24gc2hvd1dlYXRoZXIoZGF0YSkge1xuXHR2YXIgcmVzdWx0cyA9ICQoJy5yZXN1bHRzJyk7XG5cdHZhciBpY29uQ29kZSA9IGRhdGEud2VhdGhlclswXS5pY29uO1xuXHR2YXIgaWNvblVybCA9IFwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy9cIiArIGljb25Db2RlICsgXCIucG5nXCI7XG5cblx0dmFyIGNpdHkgPSBkYXRhLm5hbWU7XG5cdHZhciBjb3VudHJ5ID0gZGF0YS5zeXMuY291bnRyeTtcblx0dmFyIHRlbXAgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKTtcblx0dmFyIHRlbXBNYXggPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heCk7XG5cdHZhciB3ZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXHR2YXIgcHJlc3N1cmUgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi5wcmVzc3VyZSk7XG5cdHZhciBjbG91ZHMgPSBNYXRoLnJvdW5kKGRhdGEuY2xvdWRzLmFsbCk7XG5cdHZhciB3aW5kID0gTWF0aC5yb3VuZChkYXRhLndpbmQuc3BlZWQpO1xuXG5cblx0dmFyIGNhcmQgPSBgXG4gIDxkaXYgY2xhc3M9XCJjYXJkIHRleHQtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYmxvY2tcIj5cbiAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2NpdHl9LCAke2NvdW50cnl9PC9oND5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyX2ljb25cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2ljb25Vcmx9XCI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj50ZW1wOiA8c3Ryb25nPiR7dGVtcH08L3N0cm9uZz4gZGVncywgdGVtcCBtYXg6IDxzdHJvbmc+JHt0ZW1wTWF4fTwvc3Ryb25nPiBkZWdzPC9wPlxuICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5jbG91ZHM6IDxzdHJvbmc+JHtjbG91ZHN9PC9zdHJvbmc+LCB3aW5kIHNwZWVkOiA8c3Ryb25nPiR7d2luZH08L3N0cm9uZz48L3A+XG4gICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPndlYXRoZXI6IDxzdHJvbmc+JHt3ZWF0aGVyfTwvc3Ryb25nPiwgcHJlc3N1cmU6IDxzdHJvbmc+JHtwcmVzc3VyZX08L3N0cm9uZz48L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xuXG5cdHJlc3VsdHMuaHRtbChjYXJkKTtcbn1cbiJdfQ==