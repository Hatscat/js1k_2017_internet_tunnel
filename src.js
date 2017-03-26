A=new AudioContext;
S=A.createScriptProcessor(L=1024,T=0,1);

for(i in g)g[i[0]+i[6]]=g[i];
with(g)
    vA( // vertexAttribPointer(index, size, type, normalized, stride, offset)
        p=cP( // createProgram()
            S.onaudioprocess=e=>{
                T+=.05;
                // music
                K=0;
                for(j=L;j--;K+=k)e.outputBuffer.getChannelData(0)[j]=((t=T*L*20+j)/`6543`[t/8e3&3]&36|t/`6543`[t/32e3&7]&73|(k=t*4/[`6543`[(t/64e3^7)&7]][t/(4e3*(t/16e3&3))&1]&146))/255;
                // uniforms
                uniform1f(gf(p,`Z`),T);
                uniform1f(gf(p,`K`),1+K/L/146);
                dr( // drawArrays(mode, first, count)
                    6,
                    uniform2f(gf(p,`R`),a.width,a.height),
                    3
                )
            },
            i=e=>sS( // shaderSource(shader, source)
                    s=cS(FN++), // createShader(FRAGMENT_SHADER)
                    e
                )
            |
                ce(s) // compileShader(shader)
            |
                !aS(p,s) // attachShader(program, shader)
        ),
        2, // vA 2nd param: size
        5120, // vA 3rd param: type
        bD( // bufferData(target, srcData, usage)
            B=ET-3,
            Int8Array.of(
                i`precision mediump float;uniform float Z,K;uniform vec2 R;vec2 f(float n){return vec2(sin(n*.5)*7.,sin(n*.2)*33.);}
                void main(){float t=0.,c,l;vec2 u=gl_FragCoord.xy/R.xy*2.-1.,v,w,q;u.x*=R.x/R.y;vec3 o=vec3(f(Z),Z),r=normalize(vec3(f(Z-.44)+u,Z-.4)-o),p;for(int i=0;i<64;++i){p=o+t*r;v=f(p.z);t+=(length(p.xy-v)-2.)*.5;}w=floor(mod(q=vec2(atan(p.y-v.y,p.x-v.x),p.z)*27.,5.)*2.);c=w.x<4.?floor(mod((length(floor(mod(q/5.,2.)))==1.?12718222.:6595878.)/exp2(w.x+5.*w.y),2.)):0.;l=max(c*t*t*K,t*t*.7)/78.;gl_FragColor=vec4(l*.5,max(c/(t*t),l*.5),l,1.);}`, // fragment shader
                B,
                !eV( // enableVertexAttribArray(index)
                    bf( // bindBuffer(target, buffer)
                        B,
                        cB( // createBuffer()
                            S.connect(A.destination)
                        )
                    )
                ),
                i`attribute vec4 p;void main(){gl_Position=p;}` // vertex shader
            ),
            B+82 // bD 3rd param: usage
        ),
        !lo(p), // linkProgram(program)
        ug(p) // useProgram(program)
    )