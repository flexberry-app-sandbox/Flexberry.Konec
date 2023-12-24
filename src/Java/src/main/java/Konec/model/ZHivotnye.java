package Konec.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Konec.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Животные
 */
@Entity(name = "IISKonecЖивотные")
@Table(schema = "public", name = "Животные")
public class ZHivotnye {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодЖивотного")
    private Integer кодживотного;

    @Column(name = "Кличка")
    private String кличка;

    @Column(name = "Пол")
    private String пол;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Vidy")
    @Convert("Vidy")
    @Column(name = "Виды", length = 16, unique = true, nullable = false)
    private UUID _vidyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Vidy", insertable = false, updatable = false)
    private Vidy vidy;


    public ZHivotnye() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодЖивотного() {
      return кодживотного;
    }

    public void setКодЖивотного(Integer кодживотного) {
      this.кодживотного = кодживотного;
    }

    public String getКличка() {
      return кличка;
    }

    public void setКличка(String кличка) {
      this.кличка = кличка;
    }

    public String getПол() {
      return пол;
    }

    public void setПол(String пол) {
      this.пол = пол;
    }


}