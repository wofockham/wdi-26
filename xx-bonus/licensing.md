
# What Makes Free Software Free

Who Can Use Your Free Software And How

---

## Why do people give away their work for free?

- Notoriety
- Meritocracy
- Promote your consultancy
- Give something back to the community
- Give something to the world
- Immortality
- Collaborate publicly

> With enough eyeballs, all bugs are shallow

-- esr, The Cathedral and the Bazaar

---

## In The Beginning

- All software was *free*
- People owned the hardware
- Included software could be shared and modified
- No one thought to prevent this
- Owning software is like owning an idea
- No scarcity: I still have the code and so do you!

---

## rms

https://stallman.org/saintignucius.jpg
Richard Stallman couldn't fix a printer

---

## The GNU Project

- A complete free operating system
- Free as in beer
- Free as in speech
- Free as in hugs
- Free-er than that even
- The GNU General Public License

---

## Compiled vs Interpreted Languages

- Scripting / interpreted languages ARE the program
- Compiled languages have an extra step

---

## Compiling C

~/Projects/WDI/c-example $ cat hello.c

#include <stdio.h>

int main(void) {
  puts("Hello!");
  return 0;
}

~/Projects/WDI/c-example $ gcc hello.c
~/Projects/WDI/c-example $ ls
a.out	hello.c
~/Projects/WDI/c-example $ ./a.out
Hello!

---

## Four Software Freedoms

0. The freedom to run the program as you wish, for any purpose.
---

## Four Software Freedoms

1. The freedom to study how the program works, and change it so it does your
computing as you wish. Access to the source code is a precondition for this.
---

## Four Software Freedoms

2. The freedom to redistribute copies so you can help your neighbor.
---

## Four Software Freedoms

3. The freedom to distribute copies of your modified versions to others.
By doing this you can give the whole community a chance to benefit from your
changes. Access to the source code is a precondition for this.

---

## Terminology: Free Software vs Open Source

- Free Software (vaguely communist, rms)
- Open Source (business friendly, esr)
- FOSS: Free and Open Source Software
- FLOSS: Free, Libre and Open Source Software

https://www.gnu.org/philosophy/free-sw.en.html

---

## A Thousand Licenses Bloom

- Permissive
- Copyleft

Consider: License compatibility

---

## GPL

Everyone gets access to the code

- https://www.gnu.org/licenses/gpl-1.0.en.html
- https://www.gnu.org/licenses/gpl-2.0.en.html
- https://www.gnu.org/licenses/gpl-3.0.en.html
- "or any later version"
- Lesser LGPL

---

## MIT / BSD

> permits reuse within proprietary software provided that all copies of the
> licensed software include a copy of the MIT License terms and the copyright
> notice

https://opensource.org/licenses/MIT

The freedom to take away the freedom of others: more or less free?

---

## WTFPL

http://www.wtfpl.net/

---

## Artistic License

Larry Wall's, as used by Perl

---

## Free Software and the Web

- Client/server model
- Code running on a remote server: Affero AGPL

- Is downloading Javascript to a browser "distribution"?
- Minification: JS is becoming a compiled language

https://www.gnu.org/philosophy/javascript-trap.en.html

---

## Dual Licensing

MIT + GPL

Give your software the widest possible use

---

## Choose A License

https://choosealicense.com/
https://www.fsf.org/
