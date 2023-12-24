package Konec.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Konec.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Вольер
 */
@Entity(name = "IISKonecВольер")
@Table(schema = "public", name = "Вольер")
public class Voler {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "ТипВольера")
    private String типвольера;

    @Column(name = "Площадь")
    private String площадь;

    @OneToMany(mappedBy = "voler", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavVolera> sostavvoleras;


    public Voler() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getТипВольера() {
      return типвольера;
    }

    public void setТипВольера(String типвольера) {
      this.типвольера = типвольера;
    }

    public String getПлощадь() {
      return площадь;
    }

    public void setПлощадь(String площадь) {
      this.площадь = площадь;
    }


}