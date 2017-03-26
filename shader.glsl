vec2 f (float n)
{
	return vec2(sin(n*.5)*7., sin(n*.2)*33.);
}

void mainImage (out vec4 glFragColor, vec2 glFragCoord)
{
	float Z = iGlobalTime*2., t = 0., c, l;
    
	vec2 u = glFragCoord.xy/iResolution.xy*2.-1., v, w, q;
	u.x *= iResolution.x/iResolution.y;
    
	vec3 o = vec3(f(Z), Z),
        r = normalize(vec3(f(Z-.44)+u, Z-.4) - o),
        p;

	for (int i=0; i<64; ++i) {
		p = o + t*r;
		v = f(p.z);
		t += (length(p.xy - v) - 2.) * .5;
	}

	w = floor(mod(q = vec2(atan(p.y-v.y, p.x-v.x), p.z) * 27. ,5.) * 2.);
	c = w.x < 4. ? floor(mod( (length(floor(mod(q/5.,2.)))==1. ? 12718222. : 6595878.) / exp2(w.x + 5. * w.y), 2. )) : 0.;

	l = max(c*t*t,t*t*.7)/78.;
	glFragColor = vec4(l*.5,max(c/(t*t),l*.5),l,1.);
}