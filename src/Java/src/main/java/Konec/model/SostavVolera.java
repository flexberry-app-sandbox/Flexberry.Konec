package Konec.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Konec.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СоставВольера
 */
@Entity(name = "IISKonecСоставВольера")
@Table(schema = "public", name = "СоставВольера")
public class SostavVolera {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZHivotnye")
    @Convert("ZHivotnye")
    @Column(name = "Животные", length = 16, unique = true, nullable = false)
    private UUID _zhivotnyeid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZHivotnye", insertable = false, updatable = false)
    private ZHivotnye zhivotnye;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Voler")
    @Convert("Voler")
    @Column(name = "Вольер", length = 16, unique = true, nullable = false)
    private UUID _volerid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Voler", insertable = false, updatable = false)
    private Voler voler;


    public SostavVolera() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}