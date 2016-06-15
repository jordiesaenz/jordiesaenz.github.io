---
title: DRY Up Your Stylesheets with Sass
id: blog_post
blog_post: true
date: 2016/05/02
tags: code, css, frontend, sass
summary: Stop writing so much CSS. Stop repeating yourself. Start using Sass.
image_sq: https://7585772d0354c57373d83229aa6ed9446615d684.googledrive.com/host/0B2iaOCot7-OHMmFmcjVzSGp3dzQ/blog-post-3-sq.png
image_full: https://7585772d0354c57373d83229aa6ed9446615d684.googledrive.com/host/0B2iaOCot7-OHMmFmcjVzSGp3dzQ/blog-post-3-full.png
image_twitter: https://7585772d0354c57373d83229aa6ed9446615d684.googledrive.com/host/0B2iaOCot7-OHMmFmcjVzSGp3dzQ/blog-post-3-twitter.png
---

<p class="text-center"><em>Disclaimer: This blog post is about coding. It's also about life.</em></p>

<p>In programming, there's this thing called the DRY principle.
It stands for <em><strong>D</strong>on't <strong>R</strong>epeat <strong>Y</strong>ourself</em>.
Essentially, this just means that if you shouldn't write the same code more than once. Get rid of the excess. Be a minimalist. Nobody likes repeating themselves</p>

<p>Let's say I had to develop a page with four different modules, each with separate colors for the module title and the module body.
Seems pretty simple right? Let's take a look at what this would look like using regular, old, boring CSS:</p>

<pre class="codeblock">
<span class="blue">.module-1 .title</span> <span class="red">{</span>
  <span class="yellow">color</span>: <span class="blue">$module-1-title-color</span>;
<span class="red">}</span>
<span class="blue">.module-1 .body</span> <span class="red">{</span>
  <span class="yellow">color</span>: <span class="blue">$module-1-body-color</span>;
<span class="red">}</span>
<span class="blue">.module-2 .title</span> <span class="red">{</span>
  <span class="yellow">color</span>: <span class="blue">$module-2-title-color</span>;
<span class="red">}</span>
<span class="blue">.module-2 .body</span> <span class="red">{</span>
  <span class="yellow">color</span>: <span class="blue">$module-2-body-color</span>;
<span class="red">}</span>
<span class="blue">.module-3 .title</span> <span class="red">{</span>
  <span class="yellow">color</span>: <span class="blue">$module-3-title-color</span>;
<span class="red">}</span>
<span class="blue">.module-3 .body</span> <span class="red">{</span>
  <span class="yellow">color</span>: <span class="blue">$module-3-body-color</span>;
<span class="red">}</span>
<span class="blue">.module-4 .title</span> <span class="red">{</span>
  <span class="yellow">color</span>: <span class="blue">$module-4-title-color</span>;
<span class="red">}</span>
<span class="blue">.module-4 .body</span> <span class="red">{</span>
  <span class="yellow">color</span>: <span class="blue">$module-4-body-color</span>;
<span class="red">}</span>
</pre>

<p>What the heck. That's so stupid. I'm repeating myself over and over. Totally not DRY.</p>

<p>Thankfully, somebody else who is way smarter than me also thought this was dumb, and built some features into Sass to make this less dumb.</p>
<p><em>If you're unfamiliar with Sass, you should check it out <a href="http://sass-lang.com/">here</a>. Sass stands for 'syntactically awesome stylesheets.' Basically, it makes writing CSS way cooler and more fun.</em></p>

<p>Let's DRY up this code using nesting and hashes!</p>

<br />

<h3>Nesting</h3>

<p>I didn't really know how to explain nesting, so I Googled it, and this is the definition I found: <em>fit (an object or objects) inside a larger one</em></p>

<p>With Sass, you can put selectors inside of other selectors! So instead of writing:</p>

<pre class="codeblock">
<span class="blue">.module-1 .title</span> <span class="red">{</span>
  <span class="yellow">color</span>: <span class="blue">$module-1-title-color</span>;
<span class="red">}</span>
<span class="blue">.module-1 .body</span> <span class="red">{</span>
  <span class="yellow">color</span>: <span class="blue">$module-1-body-color</span>;
<span class="red">}</span>
</pre>
<p>I can just write this:</p>
<pre class="codeblock">
<span class="blue">.module-1</span> <span class="red">{</span>
  <span class="blue">.title</span> <span class="red">{</span>
    <span class="yellow">color</span>: <span class="blue">$module-1-title-color</span>;
  <span class="red">}</span>
  <span class="blue">.body</span> <span class="red">{</span>
    <span class="yellow">color</span>: <span class="blue">$module-1-body-color</span>;
  <span class="red">}</span>
<span class="red">}</span>
</pre>

<p>WOAH! So cool! Now I'm not repeating the whole '.module-1' thing! But wait... there's more!</p>

<p>Sass has this super cool thing called a 'parent-selector.' Basically, I can just write an ampersand (&), and Sass will print out the name of the parent selector of a nested object. For example, instead of writing out .module-1, .module-2, .module-3, and .module-4, I can just do this:</p>

<pre class="codeblock">
<span class="blue">.module</span> <span class="red">{</span>
  <span class="yellow">&</span>-1 <span class="red">{</span>
    ...
  <span class="red">}</span>
  <span class="yellow">&</span>-2 <span class="red">{</span>
    ...
  <span class="red">}</span>
  <span class="yellow">&</span>-3 <span class="red">{</span>
    ...
  <span class="red">}</span>
  <span class="yellow">&</span>-4 <span class="red">{</span>
    ...
  <span class="red">}</span>
<span class="red">}</span>
</pre>

<p>DOPE! Nesting is already cleaning up my code so much! Now, let's move on to maps..</p>

<br />

<h3>Hashes</h3>

<p>This is where the real magic happens. I like to think of hashes as a file cabinet, with something different in each drawers. With Sass, you can create these little file cabinets, then make a little function to go and grab the right files to use in all the right places. Let's see how it works...</p>

<pre class="codeblock">
<span class="blue">$numbers</span>: <span class="blue">(</span>
  <span class="cyan">1</span> <span class="blue">: (</span><span class="cyan">1</span><span class="blue">, $module-1-title-color, $module-1-body-color),</span>
  <span class="cyan">2</span> <span class="blue">: (</span><span class="cyan">2</span><span class="blue">, $module-2-title-color, $module-2-body-color),</span>
  <span class="cyan">3</span> <span class="blue">: (</span><span class="cyan">3</span><span class="blue">, $module-3-title-color, $module-3-body-color),</span>
  <span class="cyan">4</span> <span class="blue">: (</span><span class="cyan">4</span><span class="blue">, $module-4-title-color, $module-4-body-color)</span>
<span class="blue">)</span>;
</pre>

<p>Let's continue the file cabinet metaphor. I have 4 file cabinets here, defined in a map, and I've numbered them 1-4. Each file cabinet has three drawers. The first drawer has a file with the number of the file cabinet. The second drawer has the variable for the module's title color. The third file has the variable for the module's body color.</p>

<p>Okay cool, we have file cabinets. But how can we bring the files to the actual modules themselves? CHECK THIS OUT!</p>

<pre class="codeblock">
<span class="blue">.module</span> <span class="red">{</span>
  <span class="yellow">@each</span> <span class="blue">$numbers</span>, <span class="blue">number</span> <span class="yellow">in</span> <span class="blue">$numbers</span> <span class="red">{</span>
    <span class="yellow">&</span>-<span class="blue">#{nth($number, </span><span class="cyan">1</span><span class="blue">)}</span> <span class="red">{</span>
      <span class="blue">.title</span> <span class="red">{</span> <span class="yellow">color</span>: <span class="blue">#{nth($number, </span><span class="cyan">2</span><span class="blue">)}</span>; <span class="red">}</span>
      <span class="blue">.body</span> <span class="red">{</span> <span class="yellow">color</span>: <span class="blue">#{nth($number, </span><span class="cyan">3</span><span class="blue">)}</span>; <span class="red">}</span>
  <span class="red">}</span>
<span class="red">}</span>
</pre>

<p>You might be wondering, "What is going on here" Well, let me tell you...</p>

<p>See where it says @each? That's basically saying for each file cabinet in my collection of file cabinets. Each $number in $numbers.</p>

<p>Then all of the '#{nth($number, <em>x</em>)}' are essentially looking through the drawers file cabinets. The <em>x</em> is the drawer number.</p>

<p>So after all that, here's our new code for the modules, with little to no repetition:</p>

<pre class="codeblock">
<span class="blue">$numbers</span>: <span class="blue">(</span>
  <span class="cyan">1</span> <span class="blue">: (</span><span class="cyan">1</span><span class="blue">, $module-1-title-color, $module-1-body-color),</span>
  <span class="cyan">2</span> <span class="blue">: (</span><span class="cyan">2</span><span class="blue">, $module-2-title-color, $module-2-body-color),</span>
  <span class="cyan">3</span> <span class="blue">: (</span><span class="cyan">3</span><span class="blue">, $module-3-title-color, $module-3-body-color),</span>
  <span class="cyan">4</span> <span class="blue">: (</span><span class="cyan">4</span><span class="blue">, $module-4-title-color, $module-4-body-color)</span>
<span class="blue">)</span>;
<span class="blue">.module</span> <span class="red">{</span>
  <span class="yellow">@each</span> <span class="blue">$numbers</span>, <span class="blue">number</span> <span class="yellow">in</span> <span class="blue">$numbers</span> <span class="red">{</span>
    <span class="yellow">&</span>-<span class="blue">#{nth($number, </span><span class="cyan">1</span><span class="blue">)}</span> <span class="red">{</span>
      <span class="blue">.title</span> <span class="red">{</span> <span class="yellow">color</span>: <span class="blue">#{nth($number, </span><span class="cyan">2</span><span class="blue">)}</span>; <span class="red">}</span>
      <span class="blue">.body</span> <span class="red">{</span> <span class="yellow">color</span>: <span class="blue">#{nth($number, </span><span class="cyan">3</span><span class="blue">)}</span>; <span class="red">}</span>
  <span class="red">}</span>
<span class="red">}</span>
</pre>

<p>Pretty swaggy, right?</p>

<p>There are so many benefits to doing things this way. For instance, what if I want to add another module? Easy, I just add another hash (add another file cabinet). What if I want to add a <em>subtitle</em> class to all my modules and have different colors for each. I just add another entry in each hash (add another drawer to the file cabinets).</p>

<br />

<h3>Life</h3>

<p>Okay, so I said this post was also about life. It kind of is.</p>

<p>While I think there's a good place in life for repetition / rituals / daily habits, etc., I also believe that simplicity, conciseness, and minimalism are some of the most helpful things to a happy, healthy, and productive life.</p>

<p>In the code example above, the only way we were able to simplify was by defining ahead of time what was needed in the hashes. We planned ahead.</p>

<p>It would be a frivolous way to spend time if I only went to the store for the ingredients I needed for my next meal. When I plan ahead for a whole week's-worth of meal (more realistically, a few days, because food goes bad after a few days), I simplify my life. Fewer miles driven. Fewer crowded grocery store aisles.</p>

<p>Simplify. Keep your life DRY.</p>

<br />

<h3>Resources</h3>

<p>Here are some good places to learn more about Sass:</p>

<p><a href="http://sass-lang.com/">Official Sass Website</a></p>

<p><a href="https://www.codeschool.com/courses/assembling-sass">Codeschool</a></p>

<p><a href="https://teamtreehouse.com/library/sass-basics">Treehouse</a></p>
