package com.ncs503.Babybook.auth.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.stream.Collectors;

@Service
public class JwtUtils {

    private final JwtEncoder encoder;
    @Autowired
    private JwtDecoder jwtDecoder;

    public JwtUtils(JwtEncoder encoder) {
        this.encoder = encoder;
    }




    public String generateToken(Authentication authentication, String email){
        Instant now = Instant.now();
        String scope = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining( ""));
        System.out.println(scope);
        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer("self")
                .issuedAt(now)
                .expiresAt(now.plus(1, ChronoUnit.HOURS))
                .subject(email)
                .claim("scope",scope)
                .build();
        return this.encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
    }

    public String extractUsername(String token) {
        return jwtDecoder.decode(token).getClaimAsString("sub");
    }

}