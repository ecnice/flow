package com.dragon.flow.config;

import com.dragon.flow.properties.DragonFlowFrontProperties;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-11 22:14
 **/
@Configuration
public class FlowFrontConfig {

    @Autowired
    private DragonFlowFrontProperties dragonFlowFrontProperties;

    @Bean
    public RestTemplate restTemplate() {
        RestTemplate restTemplate = new RestTemplate(httpRequestFactory());
        return restTemplate;
    }

    @Bean
    public ClientHttpRequestFactory httpRequestFactory() {
        return new HttpComponentsClientHttpRequestFactory(httpClient());
    }

    @Bean
    public HttpClient httpClient() {
        Registry<ConnectionSocketFactory> registry = RegistryBuilder.<ConnectionSocketFactory>create()
                .register("http", PlainConnectionSocketFactory.getSocketFactory())
                .register("https", SSLConnectionSocketFactory.getSocketFactory())
                .build();
        PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager(registry);
        connectionManager.setMaxTotal(dragonFlowFrontProperties.getMaxtotal());
        connectionManager.setDefaultMaxPerRoute(dragonFlowFrontProperties.getDefaultMaxPerRoute());
        connectionManager.setValidateAfterInactivity(dragonFlowFrontProperties.getValidateAfterInactivity());
        RequestConfig requestConfig = RequestConfig.custom()
                .setSocketTimeout(dragonFlowFrontProperties.getSocketTimeout()) //?????????????????????(response)????????????????????????read timeout
                .setConnectTimeout(dragonFlowFrontProperties.getConnectTimeout()) //??????????????????(????????????)????????????????????????connect timeout
                .setConnectionRequestTimeout(dragonFlowFrontProperties.getConnectionRequestTimeout())//???????????????????????????????????????????????????????????????????????????????????????org.apache.http.conn.ConnectionPoolTimeoutException: Timeout waiting for connection from pool
                .build();
        return HttpClientBuilder.create()
                .setDefaultRequestConfig(requestConfig)
                .setConnectionManager(connectionManager)
                .build();
    }

}
