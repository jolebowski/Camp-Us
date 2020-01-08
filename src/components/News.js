import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';

let lien = 'lien'
export default function News() {
    const [news, setnews] = useState([
        { name: 'Soirée portes ouverte Mercredi 8 janvier', key: '1', img: 'https://twitter.com/ecole_ipssi/status/1213832381108502531/photo/1' },
        { name: "l'ipssi vous souhaite de bonnes fêtes de fin d'année!", key: '2' },
        { name: "J-2 Samedi 19 octobre retrouvez @Darkmirafr à l’école IPSSI pour contribuer ou apprendre à découvrir l’open source", key: '3', link: "https://www.meetup.com/fr-FR/Darkmira-Meetup/events/265371608/" },
        { name: 'Bac +5 spécialisé dans le marketing digital ➡️ rentrée 14 octobre ✅', key: '4', img: 'https://pbs.twimg.com/media/EFZ350oWwAEHZ_c?format=jpg&name=900x900' },
        { name: 'DevOps ça vous parle ? 🧐Un profil à double compétence pour plus d’agilité', key: '5', link: 'https://www.ecole-ipssi.com/metier-devops-quelles-etudes/?fbclid=IwAR0XA4QmLvzyBuk52vIvjqwCKtAWXZdKHqxJxcxrU64dfL_isgMGtEwU_R0' },
        { name: 'L’IPSSI c’est 4 campus à #Paris #Marnelavallée #SaintQuentinEnYveline #Toronto  Aujourd’hui petit aperçu du campus de Marne-la-Vallée à #Montévrain ', key: '6', img: 'https://pbs.twimg.com/media/EEVbf9zU4AAqQIy?format=jpg&name=900x900' },
    ])
    return (
        <View style={styles.container}>
            <ScrollView>
                {news.map((item) => {
                    return (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                            <Image
                                style={styles.img}
                                source={{ uri: item.img }}
                            />
                            <Text style={{ color: 'blue' }}
                                onPress={() => Linking.openURL(item.link)}>
                                {item.link && lien}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: '#8CC7B1',
        fontSize: 24,
        color: '#2B3B4B',
    },
    img: {
        width: 50, height: 50
    }
})
