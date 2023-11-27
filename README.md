# React + Vite


## Button组件

<p align="center" >
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/button.png"/>
</p>


<div id="doc" class="markdown-body container-fluid doc-export"><table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td>className</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>children</td>
<td>React.ReactNode</td>
<td></td>
</tr>
<tr>
<td>btnType</td>
<td></td>
<td></td>
</tr>
<tr>
<td>ButtonType</td>
<td>default = ‘default’,</td>
<td></td>
</tr>
<tr>
<td>primary = ‘primary’,</td>
<td></td>
<td></td>
</tr>
<tr>
<td>cool = ‘cool’,</td>
<td></td>
<td></td>
</tr>
<tr>
<td>danger = ‘danger’,</td>
<td></td>
<td></td>
</tr>
<tr>
<td>text = ‘text’,</td>
<td></td>
<td></td>
</tr>
<tr>
<td>black = ‘black’,</td>
<td></td>
<td></td>
</tr>
<tr>
<td>link = ‘link’,</td>
<td></td>
<td></td>
</tr>
<tr>
<td>lovely = ‘lovely’,</td>
<td></td>
<td></td>
</tr>
<tr>
<td>warm = ‘warm’,</td>
<td></td>
<td></td>
</tr>
<tr>
<td>purple = ‘purple’,</td>
<td></td>
<td></td>
</tr>
<tr>
<td>green = ‘green’,</td>
<td></td>
<td></td>
</tr>
<tr>
<td>取其一</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>ButtonSize</td>
<td>small = ‘small’,</td>
</tr>
<tr>
<td>large = ‘large’,</td>
<td></td>
<td></td>
</tr>
<tr>
<td>huge = ‘huge’</td>
<td></td>
<td></td>
</tr>
<tr>
<td>取其一</td>
<td></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>loading（是否加载状态）</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>ghost（是否幽灵按钮）</td>
<td>boolean</td>
<td></td>
</tr>
</tbody>
</table></div>
    <div class="ui-toc dropup unselectable hidden-print" style="display:none;">
      <div class="pull-right dropdown">
        <a
          id="tocLabel"
          class="ui-toc-label btn btn-default"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          title="Table of content"
        >
          <i class="fa fa-bars"></i>
        </a>
        <ul
          id="ui-toc"
          class="ui-toc-dropdown dropdown-menu"
          aria-labelledby="tocLabel"
        >
          
        </ul>
      </div>
    </div>
    <div
      id="ui-toc-affix"
      class="ui-affix-toc ui-toc-dropdown unselectable hidden-print"
      data-spy="affix"
      style="top:17px;display:none;"
      
      
    >
      <div class="toc-title fc"><span>目录</span><img src="images/icon_close.png" alt="icon_close" class="icon-close"></div><div class="toc small-scroll"></div><div class="toc-menu" style="">
    <a class="expand-toggle expand-all" href="#">全部展开</a>
    <a class="expand-toggle collapse-all" href="#" style="display: none;">全部收起</a>
    <a class="back-to-top" href="#">定位顶部</a>
    <a class="go-to-bottom" href="#">定位底部</a>
</div>
    </div>


## Alert组件

<p align="center" >
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert1.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert2.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert3.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert4.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert5.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert6.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert7.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert8.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert9.png"/>
</p>
<div id="doc" class="markdown-body container-fluid doc-export"><table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td>className</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>children</td>
<td>React.ReactNode</td>
<td></td>
</tr>
<tr>
<td>visible(//控制显示隐藏)</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>setVisible( //控制显示隐藏的函数)</td>
<td>(value: React.SetStateAction&lt;boolean&gt;) =&gt; void</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>desc</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>AlertType</td>
<td>success = ‘success’,error = ‘error’,info = ‘info’,warning = ‘warning’,cool = ‘cool’, black =‘black’,purple = ‘purple’,green = ‘green’,lovely = ‘lovely’</td>
</tr>
<tr>
<td>icon</td>
<td></td>
<td></td>
</tr>
<tr>
<td>center（ //垂直方向居中）</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>middle（ //水平方向居中）</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>onClose（ //关闭回调）</td>
<td>（）⇒void</td>
<td></td>
</tr>
<tr>
<td>closable(//是否显示关闭按钮)</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>autoclose(//自动关闭/ 5s)</td>
<td>boolean</td>
<td></td>
</tr>
</tbody>
</table></div>