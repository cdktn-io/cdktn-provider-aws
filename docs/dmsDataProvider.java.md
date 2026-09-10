# `dmsDataProvider` Submodule <a name="`dmsDataProvider` Submodule" id="@cdktn/provider-aws.dmsDataProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDataProvider <a name="DmsDataProvider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider aws_dms_data_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProvider;

DmsDataProvider.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engine(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .settings(IResolvable|java.util.List<DmsDataProviderSettings>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .virtual(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#description DmsDataProvider#description}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#name DmsDataProvider#name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.settings">settings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>></code> | settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.virtual">virtual</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#description DmsDataProvider#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#name DmsDataProvider#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#region DmsDataProvider#region}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.settings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#settings DmsDataProvider#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}.

---

##### `virtual`<sup>Optional</sup> <a name="virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.virtual"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetVirtual">resetVirtual</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings"></a>

```java
public void putSettings(IResolvable|java.util.List<DmsDataProviderSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetTags"></a>

```java
public void resetTags()
```

##### `resetVirtual` <a name="resetVirtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetVirtual"></a>

```java
public void resetVirtual()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProvider;

DmsDataProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProvider;

DmsDataProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProvider;

DmsDataProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProvider;

DmsDataProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsDataProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsDataProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsDataProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DmsDataProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList">DmsDataProviderSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtualInput">virtualInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtual">virtual</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settings"></a>

```java
public DmsDataProviderSettingsList getSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList">DmsDataProviderSettingsList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettings> getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualInput`<sup>Optional</sup> <a name="virtualInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtualInput"></a>

```java
public java.lang.Boolean|IResolvable getVirtualInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtual`<sup>Required</sup> <a name="virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtual"></a>

```java
public java.lang.Boolean|IResolvable getVirtual();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDataProviderConfig <a name="DmsDataProviderConfig" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderConfig;

DmsDataProviderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engine(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .settings(IResolvable|java.util.List<DmsDataProviderSettings>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .virtual(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#description DmsDataProvider#description}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#name DmsDataProvider#name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.settings">settings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>></code> | settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.virtual">virtual</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#description DmsDataProvider#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#name DmsDataProvider#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#region DmsDataProvider#region}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.settings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettings> getSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#settings DmsDataProvider#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}.

---

##### `virtual`<sup>Optional</sup> <a name="virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.virtual"></a>

```java
public java.lang.Boolean|IResolvable getVirtual();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}.

---

### DmsDataProviderSettings <a name="DmsDataProviderSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettings;

DmsDataProviderSettings.builder()
//  .docDbSettings(IResolvable|java.util.List<DmsDataProviderSettingsDocDbSettings>)
//  .ibmDb2LuwSettings(IResolvable|java.util.List<DmsDataProviderSettingsIbmDb2LuwSettings>)
//  .ibmDb2ZosSettings(IResolvable|java.util.List<DmsDataProviderSettingsIbmDb2ZosSettings>)
//  .mariaDbSettings(IResolvable|java.util.List<DmsDataProviderSettingsMariaDbSettings>)
//  .microsoftSqlServerSettings(IResolvable|java.util.List<DmsDataProviderSettingsMicrosoftSqlServerSettings>)
//  .mongoDbSettings(IResolvable|java.util.List<DmsDataProviderSettingsMongoDbSettings>)
//  .mysqlSettings(IResolvable|java.util.List<DmsDataProviderSettingsMysqlSettings>)
//  .oracleSettings(IResolvable|java.util.List<DmsDataProviderSettingsOracleSettings>)
//  .postgresqlSettings(IResolvable|java.util.List<DmsDataProviderSettingsPostgresqlSettings>)
//  .redshiftSettings(IResolvable|java.util.List<DmsDataProviderSettingsRedshiftSettings>)
//  .sybaseAseSettings(IResolvable|java.util.List<DmsDataProviderSettingsSybaseAseSettings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings">docDbSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>></code> | doc_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings">ibmDb2LuwSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>></code> | ibm_db2_luw_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZosSettings">ibmDb2ZosSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>></code> | ibm_db2_zos_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings">mariaDbSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>></code> | maria_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>></code> | microsoft_sql_server_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings">mongoDbSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>></code> | mongo_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mysqlSettings">mysqlSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>></code> | mysql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings">oracleSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>></code> | oracle_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.postgresqlSettings">postgresqlSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>></code> | postgresql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings">redshiftSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>></code> | redshift_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings">sybaseAseSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>></code> | sybase_ase_settings block. |

---

##### `docDbSettings`<sup>Optional</sup> <a name="docDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsDocDbSettings> getDocDbSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>>

doc_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#doc_db_settings DmsDataProvider#doc_db_settings}

---

##### `ibmDb2LuwSettings`<sup>Optional</sup> <a name="ibmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsIbmDb2LuwSettings> getIbmDb2LuwSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>>

ibm_db2_luw_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ibm_db2_luw_settings DmsDataProvider#ibm_db2_luw_settings}

---

##### `ibmDb2ZosSettings`<sup>Optional</sup> <a name="ibmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZosSettings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsIbmDb2ZosSettings> getIbmDb2ZosSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>>

ibm_db2_zos_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ibm_db2_zos_settings DmsDataProvider#ibm_db2_zos_settings}

---

##### `mariaDbSettings`<sup>Optional</sup> <a name="mariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMariaDbSettings> getMariaDbSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>>

maria_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#maria_db_settings DmsDataProvider#maria_db_settings}

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="microsoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMicrosoftSqlServerSettings> getMicrosoftSqlServerSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>>

microsoft_sql_server_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#microsoft_sql_server_settings DmsDataProvider#microsoft_sql_server_settings}

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="mongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMongoDbSettings> getMongoDbSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>>

mongo_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#mongo_db_settings DmsDataProvider#mongo_db_settings}

---

##### `mysqlSettings`<sup>Optional</sup> <a name="mysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mysqlSettings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMysqlSettings> getMysqlSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>>

mysql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#mysql_settings DmsDataProvider#mysql_settings}

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsOracleSettings> getOracleSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>>

oracle_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#oracle_settings DmsDataProvider#oracle_settings}

---

##### `postgresqlSettings`<sup>Optional</sup> <a name="postgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.postgresqlSettings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsPostgresqlSettings> getPostgresqlSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>>

postgresql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#postgresql_settings DmsDataProvider#postgresql_settings}

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsRedshiftSettings> getRedshiftSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>>

redshift_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#redshift_settings DmsDataProvider#redshift_settings}

---

##### `sybaseAseSettings`<sup>Optional</sup> <a name="sybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsSybaseAseSettings> getSybaseAseSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>>

sybase_ase_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#sybase_ase_settings DmsDataProvider#sybase_ase_settings}

---

### DmsDataProviderSettingsDocDbSettings <a name="DmsDataProviderSettingsDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsDocDbSettings;

DmsDataProviderSettingsDocDbSettings.builder()
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .port(java.lang.Number)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2LuwSettings <a name="DmsDataProviderSettingsIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsIbmDb2LuwSettings;

DmsDataProviderSettingsIbmDb2LuwSettings.builder()
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .encryptionAlgorithm(java.lang.Number)
//  .port(java.lang.Number)
//  .s3AccessRoleArn(java.lang.String)
//  .s3Path(java.lang.String)
//  .securityMechanism(java.lang.Number)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#encryption_algorithm DmsDataProvider#encryption_algorithm}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.securityMechanism">securityMechanism</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#security_mechanism DmsDataProvider#security_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.encryptionAlgorithm"></a>

```java
public java.lang.Number getEncryptionAlgorithm();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#encryption_algorithm DmsDataProvider#encryption_algorithm}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `securityMechanism`<sup>Optional</sup> <a name="securityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.securityMechanism"></a>

```java
public java.lang.Number getSecurityMechanism();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#security_mechanism DmsDataProvider#security_mechanism}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2ZosSettings <a name="DmsDataProviderSettingsIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsIbmDb2ZosSettings;

DmsDataProviderSettingsIbmDb2ZosSettings.builder()
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .port(java.lang.Number)
//  .s3AccessRoleArn(java.lang.String)
//  .s3Path(java.lang.String)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMariaDbSettings <a name="DmsDataProviderSettingsMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMariaDbSettings;

DmsDataProviderSettingsMariaDbSettings.builder()
//  .certificateArn(java.lang.String)
//  .port(java.lang.Number)
//  .s3AccessRoleArn(java.lang.String)
//  .s3Path(java.lang.String)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMicrosoftSqlServerSettings <a name="DmsDataProviderSettingsMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMicrosoftSqlServerSettings;

DmsDataProviderSettingsMicrosoftSqlServerSettings.builder()
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .port(java.lang.Number)
//  .s3AccessRoleArn(java.lang.String)
//  .s3Path(java.lang.String)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMongoDbSettings <a name="DmsDataProviderSettingsMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMongoDbSettings;

DmsDataProviderSettingsMongoDbSettings.builder()
//  .authMechanism(java.lang.String)
//  .authSource(java.lang.String)
//  .authType(java.lang.String)
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .port(java.lang.Number)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism">authMechanism</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource">authSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `authMechanism`<sup>Optional</sup> <a name="authMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism"></a>

```java
public java.lang.String getAuthMechanism();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}.

---

##### `authSource`<sup>Optional</sup> <a name="authSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource"></a>

```java
public java.lang.String getAuthSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMysqlSettings <a name="DmsDataProviderSettingsMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMysqlSettings;

DmsDataProviderSettingsMysqlSettings.builder()
//  .certificateArn(java.lang.String)
//  .port(java.lang.Number)
//  .s3AccessRoleArn(java.lang.String)
//  .s3Path(java.lang.String)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsOracleSettings <a name="DmsDataProviderSettingsOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsOracleSettings;

DmsDataProviderSettingsOracleSettings.builder()
//  .asmServer(java.lang.String)
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .port(java.lang.Number)
//  .s3AccessRoleArn(java.lang.String)
//  .s3Path(java.lang.String)
//  .secretsManagerOracleAsmAccessRoleArn(java.lang.String)
//  .secretsManagerOracleAsmSecretId(java.lang.String)
//  .secretsManagerSecurityDbEncryptionAccessRoleArn(java.lang.String)
//  .secretsManagerSecurityDbEncryptionSecretId(java.lang.String)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer">asmServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn">secretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId">secretsManagerSecurityDbEncryptionSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `asmServer`<sup>Optional</sup> <a name="asmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer"></a>

```java
public java.lang.String getAsmServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerOracleAsmAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}.

---

##### `secretsManagerOracleAsmSecretId`<sup>Optional</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```java
public java.lang.String getSecretsManagerOracleAsmSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}.

---

##### `secretsManagerSecurityDbEncryptionAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerSecurityDbEncryptionAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}.

---

##### `secretsManagerSecurityDbEncryptionSecretId`<sup>Optional</sup> <a name="secretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```java
public java.lang.String getSecretsManagerSecurityDbEncryptionSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsPostgresqlSettings <a name="DmsDataProviderSettingsPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsPostgresqlSettings;

DmsDataProviderSettingsPostgresqlSettings.builder()
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .port(java.lang.Number)
//  .s3AccessRoleArn(java.lang.String)
//  .s3Path(java.lang.String)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsRedshiftSettings <a name="DmsDataProviderSettingsRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsRedshiftSettings;

DmsDataProviderSettingsRedshiftSettings.builder()
//  .databaseName(java.lang.String)
//  .port(java.lang.Number)
//  .s3AccessRoleArn(java.lang.String)
//  .s3Path(java.lang.String)
//  .serverName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

### DmsDataProviderSettingsSybaseAseSettings <a name="DmsDataProviderSettingsSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsSybaseAseSettings;

DmsDataProviderSettingsSybaseAseSettings.builder()
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .encryptPassword(java.lang.Boolean|IResolvable)
//  .port(java.lang.Number)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword">encryptPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `encryptPassword`<sup>Optional</sup> <a name="encryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword"></a>

```java
public java.lang.Boolean|IResolvable getEncryptPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDataProviderSettingsDocDbSettingsList <a name="DmsDataProviderSettingsDocDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsDocDbSettingsList;

new DmsDataProviderSettingsDocDbSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get"></a>

```java
public DmsDataProviderSettingsDocDbSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsDocDbSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>>

---


### DmsDataProviderSettingsDocDbSettingsOutputReference <a name="DmsDataProviderSettingsDocDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsDocDbSettingsOutputReference;

new DmsDataProviderSettingsDocDbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettingsDocDbSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>

---


### DmsDataProviderSettingsIbmDb2LuwSettingsList <a name="DmsDataProviderSettingsIbmDb2LuwSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsIbmDb2LuwSettingsList;

new DmsDataProviderSettingsIbmDb2LuwSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get"></a>

```java
public DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsIbmDb2LuwSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>>

---


### DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference;

new DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSecurityMechanism">resetSecurityMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetEncryptionAlgorithm"></a>

```java
public void resetEncryptionAlgorithm()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3AccessRoleArn"></a>

```java
public void resetS3AccessRoleArn()
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3Path"></a>

```java
public void resetS3Path()
```

##### `resetSecurityMechanism` <a name="resetSecurityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSecurityMechanism"></a>

```java
public void resetSecurityMechanism()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanismInput">securityMechanismInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanism">securityMechanism</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithmInput"></a>

```java
public java.lang.Number getEncryptionAlgorithmInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```java
public java.lang.String getS3AccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3PathInput"></a>

```java
public java.lang.String getS3PathInput();
```

- *Type:* java.lang.String

---

##### `securityMechanismInput`<sup>Optional</sup> <a name="securityMechanismInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanismInput"></a>

```java
public java.lang.Number getSecurityMechanismInput();
```

- *Type:* java.lang.Number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithm"></a>

```java
public java.lang.Number getEncryptionAlgorithm();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

---

##### `securityMechanism`<sup>Required</sup> <a name="securityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanism"></a>

```java
public java.lang.Number getSecurityMechanism();
```

- *Type:* java.lang.Number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettingsIbmDb2LuwSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>

---


### DmsDataProviderSettingsIbmDb2ZosSettingsList <a name="DmsDataProviderSettingsIbmDb2ZosSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsIbmDb2ZosSettingsList;

new DmsDataProviderSettingsIbmDb2ZosSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get"></a>

```java
public DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsIbmDb2ZosSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>>

---


### DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference;

new DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3AccessRoleArn"></a>

```java
public void resetS3AccessRoleArn()
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3Path"></a>

```java
public void resetS3Path()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```java
public java.lang.String getS3AccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3PathInput"></a>

```java
public java.lang.String getS3PathInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettingsIbmDb2ZosSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>

---


### DmsDataProviderSettingsList <a name="DmsDataProviderSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsList;

new DmsDataProviderSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get"></a>

```java
public DmsDataProviderSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>>

---


### DmsDataProviderSettingsMariaDbSettingsList <a name="DmsDataProviderSettingsMariaDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMariaDbSettingsList;

new DmsDataProviderSettingsMariaDbSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get"></a>

```java
public DmsDataProviderSettingsMariaDbSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMariaDbSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>>

---


### DmsDataProviderSettingsMariaDbSettingsOutputReference <a name="DmsDataProviderSettingsMariaDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMariaDbSettingsOutputReference;

new DmsDataProviderSettingsMariaDbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3AccessRoleArn"></a>

```java
public void resetS3AccessRoleArn()
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3Path"></a>

```java
public void resetS3Path()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```java
public java.lang.String getS3AccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3PathInput"></a>

```java
public java.lang.String getS3PathInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettingsMariaDbSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsList <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList;

new DmsDataProviderSettingsMicrosoftSqlServerSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get"></a>

```java
public DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMicrosoftSqlServerSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>>

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference;

new DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3AccessRoleArn"></a>

```java
public void resetS3AccessRoleArn()
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3Path"></a>

```java
public void resetS3Path()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```java
public java.lang.String getS3AccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3PathInput"></a>

```java
public java.lang.String getS3PathInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettingsMicrosoftSqlServerSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>

---


### DmsDataProviderSettingsMongoDbSettingsList <a name="DmsDataProviderSettingsMongoDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMongoDbSettingsList;

new DmsDataProviderSettingsMongoDbSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get"></a>

```java
public DmsDataProviderSettingsMongoDbSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMongoDbSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>>

---


### DmsDataProviderSettingsMongoDbSettingsOutputReference <a name="DmsDataProviderSettingsMongoDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMongoDbSettingsOutputReference;

new DmsDataProviderSettingsMongoDbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism">resetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource">resetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthMechanism` <a name="resetAuthMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism"></a>

```java
public void resetAuthMechanism()
```

##### `resetAuthSource` <a name="resetAuthSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource"></a>

```java
public void resetAuthSource()
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput">authMechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput">authSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism">authMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource">authSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authMechanismInput`<sup>Optional</sup> <a name="authMechanismInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput"></a>

```java
public java.lang.String getAuthMechanismInput();
```

- *Type:* java.lang.String

---

##### `authSourceInput`<sup>Optional</sup> <a name="authSourceInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput"></a>

```java
public java.lang.String getAuthSourceInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `authMechanism`<sup>Required</sup> <a name="authMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism"></a>

```java
public java.lang.String getAuthMechanism();
```

- *Type:* java.lang.String

---

##### `authSource`<sup>Required</sup> <a name="authSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource"></a>

```java
public java.lang.String getAuthSource();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettingsMongoDbSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>

---


### DmsDataProviderSettingsMysqlSettingsList <a name="DmsDataProviderSettingsMysqlSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMysqlSettingsList;

new DmsDataProviderSettingsMysqlSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get"></a>

```java
public DmsDataProviderSettingsMysqlSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMysqlSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>>

---


### DmsDataProviderSettingsMysqlSettingsOutputReference <a name="DmsDataProviderSettingsMysqlSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsMysqlSettingsOutputReference;

new DmsDataProviderSettingsMysqlSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3AccessRoleArn"></a>

```java
public void resetS3AccessRoleArn()
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3Path"></a>

```java
public void resetS3Path()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```java
public java.lang.String getS3AccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3PathInput"></a>

```java
public java.lang.String getS3PathInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettingsMysqlSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>

---


### DmsDataProviderSettingsOracleSettingsList <a name="DmsDataProviderSettingsOracleSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsOracleSettingsList;

new DmsDataProviderSettingsOracleSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get"></a>

```java
public DmsDataProviderSettingsOracleSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsOracleSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>>

---


### DmsDataProviderSettingsOracleSettingsOutputReference <a name="DmsDataProviderSettingsOracleSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsOracleSettingsOutputReference;

new DmsDataProviderSettingsOracleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer">resetAsmServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">resetSecretsManagerOracleAsmAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">resetSecretsManagerOracleAsmSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn">resetSecretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId">resetSecretsManagerSecurityDbEncryptionSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAsmServer` <a name="resetAsmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer"></a>

```java
public void resetAsmServer()
```

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3AccessRoleArn"></a>

```java
public void resetS3AccessRoleArn()
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3Path"></a>

```java
public void resetS3Path()
```

##### `resetSecretsManagerOracleAsmAccessRoleArn` <a name="resetSecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```java
public void resetSecretsManagerOracleAsmAccessRoleArn()
```

##### `resetSecretsManagerOracleAsmSecretId` <a name="resetSecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```java
public void resetSecretsManagerOracleAsmSecretId()
```

##### `resetSecretsManagerSecurityDbEncryptionAccessRoleArn` <a name="resetSecretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```java
public void resetSecretsManagerSecurityDbEncryptionAccessRoleArn()
```

##### `resetSecretsManagerSecurityDbEncryptionSecretId` <a name="resetSecretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId"></a>

```java
public void resetSecretsManagerSecurityDbEncryptionSecretId()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput">asmServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">secretsManagerOracleAsmAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">secretsManagerOracleAsmSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput">secretsManagerSecurityDbEncryptionAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput">secretsManagerSecurityDbEncryptionSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer">asmServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn">secretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId">secretsManagerSecurityDbEncryptionSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asmServerInput`<sup>Optional</sup> <a name="asmServerInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput"></a>

```java
public java.lang.String getAsmServerInput();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```java
public java.lang.String getS3AccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3PathInput"></a>

```java
public java.lang.String getS3PathInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerOracleAsmAccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerOracleAsmAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmSecretIdInput`<sup>Optional</sup> <a name="secretsManagerOracleAsmSecretIdInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerOracleAsmSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecurityDbEncryptionAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerSecurityDbEncryptionAccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerSecurityDbEncryptionAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecurityDbEncryptionSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecurityDbEncryptionSecretIdInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecurityDbEncryptionSecretIdInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `asmServer`<sup>Required</sup> <a name="asmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer"></a>

```java
public java.lang.String getAsmServer();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerOracleAsmAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```java
public java.lang.String getSecretsManagerOracleAsmSecretId();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecurityDbEncryptionAccessRoleArn`<sup>Required</sup> <a name="secretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerSecurityDbEncryptionAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecurityDbEncryptionSecretId`<sup>Required</sup> <a name="secretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```java
public java.lang.String getSecretsManagerSecurityDbEncryptionSecretId();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettingsOracleSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>

---


### DmsDataProviderSettingsOutputReference <a name="DmsDataProviderSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsOutputReference;

new DmsDataProviderSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings">putDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings">putIbmDb2LuwSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings">putIbmDb2ZosSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings">putMariaDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings">putMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings">putMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings">putMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings">putOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings">putPostgresqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings">putRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings">putSybaseAseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings">resetDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings">resetIbmDb2LuwSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZosSettings">resetIbmDb2ZosSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings">resetMariaDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings">resetMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings">resetMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMysqlSettings">resetMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings">resetOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgresqlSettings">resetPostgresqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings">resetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings">resetSybaseAseSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDocDbSettings` <a name="putDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings"></a>

```java
public void putDocDbSettings(IResolvable|java.util.List<DmsDataProviderSettingsDocDbSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>>

---

##### `putIbmDb2LuwSettings` <a name="putIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings"></a>

```java
public void putIbmDb2LuwSettings(IResolvable|java.util.List<DmsDataProviderSettingsIbmDb2LuwSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>>

---

##### `putIbmDb2ZosSettings` <a name="putIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings"></a>

```java
public void putIbmDb2ZosSettings(IResolvable|java.util.List<DmsDataProviderSettingsIbmDb2ZosSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>>

---

##### `putMariaDbSettings` <a name="putMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings"></a>

```java
public void putMariaDbSettings(IResolvable|java.util.List<DmsDataProviderSettingsMariaDbSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>>

---

##### `putMicrosoftSqlServerSettings` <a name="putMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings"></a>

```java
public void putMicrosoftSqlServerSettings(IResolvable|java.util.List<DmsDataProviderSettingsMicrosoftSqlServerSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>>

---

##### `putMongoDbSettings` <a name="putMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings"></a>

```java
public void putMongoDbSettings(IResolvable|java.util.List<DmsDataProviderSettingsMongoDbSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>>

---

##### `putMysqlSettings` <a name="putMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings"></a>

```java
public void putMysqlSettings(IResolvable|java.util.List<DmsDataProviderSettingsMysqlSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>>

---

##### `putOracleSettings` <a name="putOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings"></a>

```java
public void putOracleSettings(IResolvable|java.util.List<DmsDataProviderSettingsOracleSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>>

---

##### `putPostgresqlSettings` <a name="putPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings"></a>

```java
public void putPostgresqlSettings(IResolvable|java.util.List<DmsDataProviderSettingsPostgresqlSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>>

---

##### `putRedshiftSettings` <a name="putRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings"></a>

```java
public void putRedshiftSettings(IResolvable|java.util.List<DmsDataProviderSettingsRedshiftSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>>

---

##### `putSybaseAseSettings` <a name="putSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings"></a>

```java
public void putSybaseAseSettings(IResolvable|java.util.List<DmsDataProviderSettingsSybaseAseSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>>

---

##### `resetDocDbSettings` <a name="resetDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings"></a>

```java
public void resetDocDbSettings()
```

##### `resetIbmDb2LuwSettings` <a name="resetIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings"></a>

```java
public void resetIbmDb2LuwSettings()
```

##### `resetIbmDb2ZosSettings` <a name="resetIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZosSettings"></a>

```java
public void resetIbmDb2ZosSettings()
```

##### `resetMariaDbSettings` <a name="resetMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings"></a>

```java
public void resetMariaDbSettings()
```

##### `resetMicrosoftSqlServerSettings` <a name="resetMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings"></a>

```java
public void resetMicrosoftSqlServerSettings()
```

##### `resetMongoDbSettings` <a name="resetMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings"></a>

```java
public void resetMongoDbSettings()
```

##### `resetMysqlSettings` <a name="resetMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMysqlSettings"></a>

```java
public void resetMysqlSettings()
```

##### `resetOracleSettings` <a name="resetOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings"></a>

```java
public void resetOracleSettings()
```

##### `resetPostgresqlSettings` <a name="resetPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgresqlSettings"></a>

```java
public void resetPostgresqlSettings()
```

##### `resetRedshiftSettings` <a name="resetRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings"></a>

```java
public void resetRedshiftSettings()
```

##### `resetSybaseAseSettings` <a name="resetSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings"></a>

```java
public void resetSybaseAseSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings">docDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList">DmsDataProviderSettingsDocDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings">ibmDb2LuwSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList">DmsDataProviderSettingsIbmDb2LuwSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettings">ibmDb2ZosSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList">DmsDataProviderSettingsIbmDb2ZosSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings">mariaDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList">DmsDataProviderSettingsMariaDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList">DmsDataProviderSettingsMicrosoftSqlServerSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings">mongoDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList">DmsDataProviderSettingsMongoDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettings">mysqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList">DmsDataProviderSettingsMysqlSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList">DmsDataProviderSettingsOracleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettings">postgresqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList">DmsDataProviderSettingsPostgresqlSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList">DmsDataProviderSettingsRedshiftSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings">sybaseAseSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList">DmsDataProviderSettingsSybaseAseSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput">docDbSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput">ibmDb2LuwSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettingsInput">ibmDb2ZosSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput">mariaDbSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput">microsoftSqlServerSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput">mongoDbSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettingsInput">mysqlSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput">oracleSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettingsInput">postgresqlSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput">redshiftSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput">sybaseAseSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `docDbSettings`<sup>Required</sup> <a name="docDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings"></a>

```java
public DmsDataProviderSettingsDocDbSettingsList getDocDbSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList">DmsDataProviderSettingsDocDbSettingsList</a>

---

##### `ibmDb2LuwSettings`<sup>Required</sup> <a name="ibmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings"></a>

```java
public DmsDataProviderSettingsIbmDb2LuwSettingsList getIbmDb2LuwSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList">DmsDataProviderSettingsIbmDb2LuwSettingsList</a>

---

##### `ibmDb2ZosSettings`<sup>Required</sup> <a name="ibmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettings"></a>

```java
public DmsDataProviderSettingsIbmDb2ZosSettingsList getIbmDb2ZosSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList">DmsDataProviderSettingsIbmDb2ZosSettingsList</a>

---

##### `mariaDbSettings`<sup>Required</sup> <a name="mariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings"></a>

```java
public DmsDataProviderSettingsMariaDbSettingsList getMariaDbSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList">DmsDataProviderSettingsMariaDbSettingsList</a>

---

##### `microsoftSqlServerSettings`<sup>Required</sup> <a name="microsoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings"></a>

```java
public DmsDataProviderSettingsMicrosoftSqlServerSettingsList getMicrosoftSqlServerSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList">DmsDataProviderSettingsMicrosoftSqlServerSettingsList</a>

---

##### `mongoDbSettings`<sup>Required</sup> <a name="mongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings"></a>

```java
public DmsDataProviderSettingsMongoDbSettingsList getMongoDbSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList">DmsDataProviderSettingsMongoDbSettingsList</a>

---

##### `mysqlSettings`<sup>Required</sup> <a name="mysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettings"></a>

```java
public DmsDataProviderSettingsMysqlSettingsList getMysqlSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList">DmsDataProviderSettingsMysqlSettingsList</a>

---

##### `oracleSettings`<sup>Required</sup> <a name="oracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings"></a>

```java
public DmsDataProviderSettingsOracleSettingsList getOracleSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList">DmsDataProviderSettingsOracleSettingsList</a>

---

##### `postgresqlSettings`<sup>Required</sup> <a name="postgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettings"></a>

```java
public DmsDataProviderSettingsPostgresqlSettingsList getPostgresqlSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList">DmsDataProviderSettingsPostgresqlSettingsList</a>

---

##### `redshiftSettings`<sup>Required</sup> <a name="redshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings"></a>

```java
public DmsDataProviderSettingsRedshiftSettingsList getRedshiftSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList">DmsDataProviderSettingsRedshiftSettingsList</a>

---

##### `sybaseAseSettings`<sup>Required</sup> <a name="sybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings"></a>

```java
public DmsDataProviderSettingsSybaseAseSettingsList getSybaseAseSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList">DmsDataProviderSettingsSybaseAseSettingsList</a>

---

##### `docDbSettingsInput`<sup>Optional</sup> <a name="docDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsDocDbSettings> getDocDbSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>>

---

##### `ibmDb2LuwSettingsInput`<sup>Optional</sup> <a name="ibmDb2LuwSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsIbmDb2LuwSettings> getIbmDb2LuwSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>>

---

##### `ibmDb2ZosSettingsInput`<sup>Optional</sup> <a name="ibmDb2ZosSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsIbmDb2ZosSettings> getIbmDb2ZosSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>>

---

##### `mariaDbSettingsInput`<sup>Optional</sup> <a name="mariaDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMariaDbSettings> getMariaDbSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>>

---

##### `microsoftSqlServerSettingsInput`<sup>Optional</sup> <a name="microsoftSqlServerSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMicrosoftSqlServerSettings> getMicrosoftSqlServerSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>>

---

##### `mongoDbSettingsInput`<sup>Optional</sup> <a name="mongoDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMongoDbSettings> getMongoDbSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>>

---

##### `mysqlSettingsInput`<sup>Optional</sup> <a name="mysqlSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsMysqlSettings> getMysqlSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>>

---

##### `oracleSettingsInput`<sup>Optional</sup> <a name="oracleSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsOracleSettings> getOracleSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>>

---

##### `postgresqlSettingsInput`<sup>Optional</sup> <a name="postgresqlSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsPostgresqlSettings> getPostgresqlSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>>

---

##### `redshiftSettingsInput`<sup>Optional</sup> <a name="redshiftSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsRedshiftSettings> getRedshiftSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>>

---

##### `sybaseAseSettingsInput`<sup>Optional</sup> <a name="sybaseAseSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsSybaseAseSettings> getSybaseAseSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>

---


### DmsDataProviderSettingsPostgresqlSettingsList <a name="DmsDataProviderSettingsPostgresqlSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsPostgresqlSettingsList;

new DmsDataProviderSettingsPostgresqlSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get"></a>

```java
public DmsDataProviderSettingsPostgresqlSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsPostgresqlSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>>

---


### DmsDataProviderSettingsPostgresqlSettingsOutputReference <a name="DmsDataProviderSettingsPostgresqlSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsPostgresqlSettingsOutputReference;

new DmsDataProviderSettingsPostgresqlSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3AccessRoleArn"></a>

```java
public void resetS3AccessRoleArn()
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3Path"></a>

```java
public void resetS3Path()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```java
public java.lang.String getS3AccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3PathInput"></a>

```java
public java.lang.String getS3PathInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettingsPostgresqlSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>

---


### DmsDataProviderSettingsRedshiftSettingsList <a name="DmsDataProviderSettingsRedshiftSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsRedshiftSettingsList;

new DmsDataProviderSettingsRedshiftSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get"></a>

```java
public DmsDataProviderSettingsRedshiftSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsRedshiftSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>>

---


### DmsDataProviderSettingsRedshiftSettingsOutputReference <a name="DmsDataProviderSettingsRedshiftSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsRedshiftSettingsOutputReference;

new DmsDataProviderSettingsRedshiftSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3AccessRoleArn"></a>

```java
public void resetS3AccessRoleArn()
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3Path"></a>

```java
public void resetS3Path()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```java
public java.lang.String getS3AccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3PathInput"></a>

```java
public java.lang.String getS3PathInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArn"></a>

```java
public java.lang.String getS3AccessRoleArn();
```

- *Type:* java.lang.String

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3Path"></a>

```java
public java.lang.String getS3Path();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettingsRedshiftSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>

---


### DmsDataProviderSettingsSybaseAseSettingsList <a name="DmsDataProviderSettingsSybaseAseSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsSybaseAseSettingsList;

new DmsDataProviderSettingsSybaseAseSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get"></a>

```java
public DmsDataProviderSettingsSybaseAseSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsDataProviderSettingsSybaseAseSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>>

---


### DmsDataProviderSettingsSybaseAseSettingsOutputReference <a name="DmsDataProviderSettingsSybaseAseSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_data_provider.DmsDataProviderSettingsSybaseAseSettingsOutputReference;

new DmsDataProviderSettingsSybaseAseSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword">resetEncryptPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetEncryptPassword` <a name="resetEncryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword"></a>

```java
public void resetEncryptPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput">encryptPasswordInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword">encryptPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `encryptPasswordInput`<sup>Optional</sup> <a name="encryptPasswordInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput"></a>

```java
public java.lang.Boolean|IResolvable getEncryptPasswordInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `encryptPassword`<sup>Required</sup> <a name="encryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword"></a>

```java
public java.lang.Boolean|IResolvable getEncryptPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsDataProviderSettingsSybaseAseSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>

---



