(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="三七花" style="background-image: url('/photos/tint/%E4%B8%89%E4%B8%83%E8%8A%B1-65ba1d.JPG')" title="三七花">
  <img class="lazyload" data-src="/photos/thumbnail/%E4%B8%89%E4%B8%83%E8%8A%B1-ccf4df.JPG" src="/photos/tint/%E4%B8%89%E4%B8%83%E8%8A%B1-65ba1d.JPG" height="1279" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E4%B8%89%E4%B8%83%E8%8A%B1-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E4%B8%89%E4%B8%83%E8%8A%B1" data-target="三七花">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-2" data-target="大邑雾山乡随拍-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="大邑雾山乡随拍-2" style="background-image: url('/photos/tint/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-2-65ba1d.JPG')" title="大邑雾山乡随拍-2">
  <img class="lazyload" data-src="/photos/thumbnail/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-2-ccf4df.JPG" src="/photos/tint/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-2-65ba1d.JPG" height="1080" width="1440" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-2-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-2" data-target="大邑雾山乡随拍-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E4%B8%89%E4%B8%83%E8%8A%B1" data-target="三七花" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-3" data-target="大邑雾山乡随拍-3" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="大邑雾山乡随拍-3" style="background-image: url('/photos/tint/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-3-65ba1d.JPG')" title="大邑雾山乡随拍-3">
  <img class="lazyload" data-src="/photos/thumbnail/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-3-ccf4df.JPG" src="/photos/tint/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-3-65ba1d.JPG" height="1440" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-3-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-3" data-target="大邑雾山乡随拍-3">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-2" data-target="大邑雾山乡随拍-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-1" data-target="大邑雾山乡随拍-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="大邑雾山乡随拍-1" style="background-image: url('/photos/tint/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-1-65ba1d.JPG')" title="大邑雾山乡随拍-1">
  <img class="lazyload" data-src="/photos/thumbnail/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-1-ccf4df.JPG" src="/photos/tint/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-1-65ba1d.JPG" height="1440" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-1-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-1" data-target="大邑雾山乡随拍-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-3" data-target="大邑雾山乡随拍-3" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1-%E7%81%B0%E8%BF%B9%E7%94%B5%E8%B7%AF" data-target="大邑雾山乡-灰迹电路" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="大邑雾山乡-灰迹电路" style="background-image: url('/photos/tint/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1-%E7%81%B0%E8%BF%B9%E7%94%B5%E8%B7%AF-65ba1d.JPG')" title="大邑雾山乡-灰迹电路">
  <img class="lazyload" data-src="/photos/thumbnail/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1-%E7%81%B0%E8%BF%B9%E7%94%B5%E8%B7%AF-ccf4df.JPG" src="/photos/tint/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1-%E7%81%B0%E8%BF%B9%E7%94%B5%E8%B7%AF-65ba1d.JPG" height="1440" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1-%E7%81%B0%E8%BF%B9%E7%94%B5%E8%B7%AF-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1-%E7%81%B0%E8%BF%B9%E7%94%B5%E8%B7%AF" data-target="大邑雾山乡-灰迹电路">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1%E9%9A%8F%E6%8B%8D-1" data-target="大邑雾山乡随拍-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E5%B1%B1%E5%9F%8E" data-target="山城" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="山城" style="background-image: url('/photos/tint/%E5%B1%B1%E5%9F%8E-65ba1d.JPG')" title="山城">
  <img class="lazyload" data-src="/photos/thumbnail/%E5%B1%B1%E5%9F%8E-ccf4df.JPG" src="/photos/tint/%E5%B1%B1%E5%9F%8E-65ba1d.JPG" height="1080" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E5%B1%B1%E5%9F%8E-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E5%B1%B1%E5%9F%8E" data-target="山城">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E5%A4%A7%E9%82%91%E9%9B%BE%E5%B1%B1%E4%B9%A1-%E7%81%B0%E8%BF%B9%E7%94%B5%E8%B7%AF" data-target="大邑雾山乡-灰迹电路" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E5%96%B5" data-target="喵" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="喵" style="background-image: url('/photos/tint/%E5%96%B5-65ba1d.png')" title="喵">
  <img class="lazyload" data-src="/photos/thumbnail/%E5%96%B5-ccf4df.png" src="/photos/tint/%E5%96%B5-65ba1d.png" height="1440" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E5%96%B5-686656.png')"></span>
  </span>
  <a class="open" href="/%E5%96%B5" data-target="喵">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E5%B1%B1%E5%9F%8E" data-target="山城" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E8%A5%BF%E8%B4%A2%E8%A3%B8%E7%94%B7" data-target="西财裸男" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="西财裸男" style="background-image: url('/photos/tint/%E8%A5%BF%E8%B4%A2%E8%A3%B8%E7%94%B7-65ba1d.JPG')" title="西财裸男">
  <img class="lazyload" data-src="/photos/thumbnail/%E8%A5%BF%E8%B4%A2%E8%A3%B8%E7%94%B7-ccf4df.JPG" src="/photos/tint/%E8%A5%BF%E8%B4%A2%E8%A3%B8%E7%94%B7-65ba1d.JPG" height="1280" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E8%A5%BF%E8%B4%A2%E8%A3%B8%E7%94%B7-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E8%A5%BF%E8%B4%A2%E8%A3%B8%E7%94%B7" data-target="西财裸男">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E5%96%B5" data-target="喵" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-2" data-target="不屑眼神-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="不屑眼神-2" style="background-image: url('/photos/tint/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-2-65ba1d.JPG')" title="不屑眼神-2">
  <img class="lazyload" data-src="/photos/thumbnail/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-2-ccf4df.JPG" src="/photos/tint/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-2-65ba1d.JPG" height="1252" width="1878" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-2-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-2" data-target="不屑眼神-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E8%A5%BF%E8%B4%A2%E8%A3%B8%E7%94%B7" data-target="西财裸男" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-1" data-target="不屑眼神-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="不屑眼神-1" style="background-image: url('/photos/tint/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-1-65ba1d.png')" title="不屑眼神-1">
  <img class="lazyload" data-src="/photos/thumbnail/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-1-ccf4df.png" src="/photos/tint/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-1-65ba1d.png" height="1281" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-1-686656.png')"></span>
  </span>
  <a class="open" href="/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-1" data-target="不屑眼神-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-2" data-target="不屑眼神-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-3" data-target="木陶茶扎染-二山-3" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="木陶茶扎染-二山-3" style="background-image: url('/photos/tint/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-3-65ba1d.JPG')" title="木陶茶扎染-二山-3">
  <img class="lazyload" data-src="/photos/thumbnail/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-3-ccf4df.JPG" src="/photos/tint/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-3-65ba1d.JPG" height="1920" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-3-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-3" data-target="木陶茶扎染-二山-3">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E4%B8%8D%E5%B1%91%E7%9C%BC%E7%A5%9E-1" data-target="不屑眼神-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-2" data-target="木陶茶扎染-二山-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="木陶茶扎染-二山-2" style="background-image: url('/photos/tint/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-2-65ba1d.JPG')" title="木陶茶扎染-二山-2">
  <img class="lazyload" data-src="/photos/thumbnail/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-2-ccf4df.JPG" src="/photos/tint/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-2-65ba1d.JPG" height="1836" width="1836" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-2-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-2" data-target="木陶茶扎染-二山-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-3" data-target="木陶茶扎染-二山-3" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-1" data-target="木陶茶扎染-二山-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="木陶茶扎染-二山-1" style="background-image: url('/photos/tint/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-1-65ba1d.JPG')" title="木陶茶扎染-二山-1">
  <img class="lazyload" data-src="/photos/thumbnail/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-1-ccf4df.JPG" src="/photos/tint/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-1-65ba1d.JPG" height="1920" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-1-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-1" data-target="木陶茶扎染-二山-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-2" data-target="木陶茶扎染-二山-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-2" data-target="深秋-康定折多山夜景-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="深秋-康定折多山夜景-2" style="background-image: url('/photos/tint/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-2-65ba1d.JPG')" title="深秋-康定折多山夜景-2">
  <img class="lazyload" data-src="/photos/thumbnail/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-2-ccf4df.JPG" src="/photos/tint/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-2-65ba1d.JPG" height="972" width="1476" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-2-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-2" data-target="深秋-康定折多山夜景-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E6%9C%A8%E9%99%B6%E8%8C%B6%E6%89%8E%E6%9F%93-%E4%BA%8C%E5%B1%B1-1" data-target="木陶茶扎染-二山-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-1" data-target="深秋-康定折多山夜景-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="深秋-康定折多山夜景-1" style="background-image: url('/photos/tint/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-1-65ba1d.JPG')" title="深秋-康定折多山夜景-1">
  <img class="lazyload" data-src="/photos/thumbnail/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-1-ccf4df.JPG" src="/photos/tint/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-1-65ba1d.JPG" height="964" width="1436" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-1-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-1" data-target="深秋-康定折多山夜景-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-2" data-target="深秋-康定折多山夜景-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-2" data-target="西村-竹墙-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="西村-竹墙-2" style="background-image: url('/photos/tint/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-2-65ba1d.JPG')" title="西村-竹墙-2">
  <img class="lazyload" data-src="/photos/thumbnail/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-2-ccf4df.JPG" src="/photos/tint/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-2-65ba1d.JPG" height="1280" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-2-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-2" data-target="西村-竹墙-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E6%B7%B1%E7%A7%8B-%E5%BA%B7%E5%AE%9A%E6%8A%98%E5%A4%9A%E5%B1%B1%E5%A4%9C%E6%99%AF-1" data-target="深秋-康定折多山夜景-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-1" data-target="西村-竹墙-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="西村-竹墙-1" style="background-image: url('/photos/tint/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-1-65ba1d.JPG')" title="西村-竹墙-1">
  <img class="lazyload" data-src="/photos/thumbnail/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-1-ccf4df.JPG" src="/photos/tint/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-1-65ba1d.JPG" height="1280" width="1920" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-1-686656.JPG')"></span>
  </span>
  <a class="open" href="/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-1" data-target="西村-竹墙-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E8%A5%BF%E6%9D%91-%E7%AB%B9%E5%A2%99-2" data-target="西村-竹墙-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
`);