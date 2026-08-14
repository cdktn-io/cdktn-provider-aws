# `glueConnection` Submodule <a name="`glueConnection` Submodule" id="@cdktn/provider-aws.glueConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueConnection <a name="GlueConnection" id="@cdktn/provider-aws.glueConnection.GlueConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection aws_glue_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnection;

GlueConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .athenaProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .authenticationConfiguration(GlueConnectionAuthenticationConfiguration)
//  .catalogId(java.lang.String)
//  .connectionProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .connectionType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .matchCriteria(java.util.List<java.lang.String>)
//  .physicalConnectionRequirements(GlueConnectionPhysicalConnectionRequirements)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#name GlueConnection#name}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.athenaProperties">athenaProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connectionProperties">connectionProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#description GlueConnection#description}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#id GlueConnection#id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.matchCriteria">matchCriteria</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.physicalConnectionRequirements">physicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | physical_connection_requirements block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#tags GlueConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#name GlueConnection#name}.

---

##### `athenaProperties`<sup>Optional</sup> <a name="athenaProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.athenaProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}.

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.authenticationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#authentication_configuration GlueConnection#authentication_configuration}

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.catalogId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}.

---

##### `connectionProperties`<sup>Optional</sup> <a name="connectionProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connectionProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connectionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#description GlueConnection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#id GlueConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matchCriteria`<sup>Optional</sup> <a name="matchCriteria" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.matchCriteria"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}.

---

##### `physicalConnectionRequirements`<sup>Optional</sup> <a name="physicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.physicalConnectionRequirements"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

physical_connection_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#region GlueConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#tags GlueConnection#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration">putAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements">putPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetAthenaProperties">resetAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetAuthenticationConfiguration">resetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionProperties">resetConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetMatchCriteria">resetMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetPhysicalConnectionRequirements">resetPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.glueConnection.GlueConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.glueConnection.GlueConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.glueConnection.GlueConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.glueConnection.GlueConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.glueConnection.GlueConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.glueConnection.GlueConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticationConfiguration` <a name="putAuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration"></a>

```java
public void putAuthenticationConfiguration(GlueConnectionAuthenticationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

---

##### `putPhysicalConnectionRequirements` <a name="putPhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements"></a>

```java
public void putPhysicalConnectionRequirements(GlueConnectionPhysicalConnectionRequirements value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

---

##### `resetAthenaProperties` <a name="resetAthenaProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetAthenaProperties"></a>

```java
public void resetAthenaProperties()
```

##### `resetAuthenticationConfiguration` <a name="resetAuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetAuthenticationConfiguration"></a>

```java
public void resetAuthenticationConfiguration()
```

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetConnectionProperties` <a name="resetConnectionProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionProperties"></a>

```java
public void resetConnectionProperties()
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionType"></a>

```java
public void resetConnectionType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetId"></a>

```java
public void resetId()
```

##### `resetMatchCriteria` <a name="resetMatchCriteria" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetMatchCriteria"></a>

```java
public void resetMatchCriteria()
```

##### `resetPhysicalConnectionRequirements` <a name="resetPhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetPhysicalConnectionRequirements"></a>

```java
public void resetPhysicalConnectionRequirements()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnection;

GlueConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnection;

GlueConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnection;

GlueConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnection;

GlueConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlueConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlueConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlueConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlueConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference">GlueConnectionAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirements">physicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference">GlueConnectionPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaPropertiesInput">athenaPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfigurationInput">authenticationConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionPropertiesInput">connectionPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteriaInput">matchCriteriaInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirementsInput">physicalConnectionRequirementsInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaProperties">athenaProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionProperties">connectionProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteria">matchCriteria</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfiguration"></a>

```java
public GlueConnectionAuthenticationConfigurationOutputReference getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference">GlueConnectionAuthenticationConfigurationOutputReference</a>

---

##### `physicalConnectionRequirements`<sup>Required</sup> <a name="physicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirements"></a>

```java
public GlueConnectionPhysicalConnectionRequirementsOutputReference getPhysicalConnectionRequirements();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference">GlueConnectionPhysicalConnectionRequirementsOutputReference</a>

---

##### `athenaPropertiesInput`<sup>Optional</sup> <a name="athenaPropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAthenaPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authenticationConfigurationInput`<sup>Optional</sup> <a name="authenticationConfigurationInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfigurationInput"></a>

```java
public GlueConnectionAuthenticationConfiguration getAuthenticationConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `connectionPropertiesInput`<sup>Optional</sup> <a name="connectionPropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectionPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `matchCriteriaInput`<sup>Optional</sup> <a name="matchCriteriaInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteriaInput"></a>

```java
public java.util.List<java.lang.String> getMatchCriteriaInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `physicalConnectionRequirementsInput`<sup>Optional</sup> <a name="physicalConnectionRequirementsInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirementsInput"></a>

```java
public GlueConnectionPhysicalConnectionRequirements getPhysicalConnectionRequirementsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `athenaProperties`<sup>Required</sup> <a name="athenaProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAthenaProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `connectionProperties`<sup>Required</sup> <a name="connectionProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectionProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteria"></a>

```java
public java.util.List<java.lang.String> getMatchCriteria();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueConnectionAuthenticationConfiguration <a name="GlueConnectionAuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfiguration;

GlueConnectionAuthenticationConfiguration.builder()
    .authenticationType(java.lang.String)
//  .basicAuthenticationCredentials(GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials)
//  .customAuthenticationCredentials(java.util.Map<java.lang.String, java.lang.String>)
//  .kmsKeyArn(java.lang.String)
//  .oauth2Properties(GlueConnectionAuthenticationConfigurationOauth2Properties)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.basicAuthenticationCredentials">basicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | basic_authentication_credentials block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.customAuthenticationCredentials">customAuthenticationCredentials</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.oauth2Properties">oauth2Properties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | oauth2_properties block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}. |

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}.

---

##### `basicAuthenticationCredentials`<sup>Optional</sup> <a name="basicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.basicAuthenticationCredentials"></a>

```java
public GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials getBasicAuthenticationCredentials();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

basic_authentication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#basic_authentication_credentials GlueConnection#basic_authentication_credentials}

---

##### `customAuthenticationCredentials`<sup>Optional</sup> <a name="customAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.customAuthenticationCredentials"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAuthenticationCredentials();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}.

---

##### `oauth2Properties`<sup>Optional</sup> <a name="oauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.oauth2Properties"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2Properties getOauth2Properties();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

oauth2_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#oauth2_properties GlueConnection#oauth2_properties}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}.

---

### GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials <a name="GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials;

GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#password GlueConnection#password}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#username GlueConnection#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#password GlueConnection#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#username GlueConnection#username}.

---

### GlueConnectionAuthenticationConfigurationOauth2Properties <a name="GlueConnectionAuthenticationConfigurationOauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfigurationOauth2Properties;

GlueConnectionAuthenticationConfigurationOauth2Properties.builder()
//  .authorizationCodeProperties(GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties)
//  .oauth2ClientApplication(GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication)
//  .oauth2Credentials(GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials)
//  .oauth2GrantType(java.lang.String)
//  .tokenUrl(java.lang.String)
//  .tokenUrlParametersMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.authorizationCodeProperties">authorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | authorization_code_properties block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2ClientApplication">oauth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | oauth2_client_application block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2Credentials">oauth2Credentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | oauth2_credentials block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2GrantType">oauth2GrantType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#oauth2_grant_type GlueConnection#oauth2_grant_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#token_url GlueConnection#token_url}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrlParametersMap">tokenUrlParametersMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}. |

---

##### `authorizationCodeProperties`<sup>Optional</sup> <a name="authorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.authorizationCodeProperties"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties getAuthorizationCodeProperties();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

authorization_code_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#authorization_code_properties GlueConnection#authorization_code_properties}

---

##### `oauth2ClientApplication`<sup>Optional</sup> <a name="oauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2ClientApplication"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication getOauth2ClientApplication();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

oauth2_client_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#oauth2_client_application GlueConnection#oauth2_client_application}

---

##### `oauth2Credentials`<sup>Optional</sup> <a name="oauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2Credentials"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials getOauth2Credentials();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

oauth2_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#oauth2_credentials GlueConnection#oauth2_credentials}

---

##### `oauth2GrantType`<sup>Optional</sup> <a name="oauth2GrantType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2GrantType"></a>

```java
public java.lang.String getOauth2GrantType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#oauth2_grant_type GlueConnection#oauth2_grant_type}.

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#token_url GlueConnection#token_url}.

---

##### `tokenUrlParametersMap`<sup>Optional</sup> <a name="tokenUrlParametersMap" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrlParametersMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTokenUrlParametersMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties;

GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.builder()
    .authorizationCode(java.lang.String)
    .redirectUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.authorizationCode">authorizationCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}. |

---

##### `authorizationCode`<sup>Required</sup> <a name="authorizationCode" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.authorizationCode"></a>

```java
public java.lang.String getAuthorizationCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}.

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication;

GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.builder()
//  .awsManagedClientApplicationReference(java.lang.String)
//  .userManagedClientApplicationClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.awsManagedClientApplicationReference">awsManagedClientApplicationReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.userManagedClientApplicationClientId">userManagedClientApplicationClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}. |

---

##### `awsManagedClientApplicationReference`<sup>Optional</sup> <a name="awsManagedClientApplicationReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.awsManagedClientApplicationReference"></a>

```java
public java.lang.String getAwsManagedClientApplicationReference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}.

---

##### `userManagedClientApplicationClientId`<sup>Optional</sup> <a name="userManagedClientApplicationClientId" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.userManagedClientApplicationClientId"></a>

```java
public java.lang.String getUserManagedClientApplicationClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials;

GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.builder()
//  .accessToken(java.lang.String)
//  .jwtToken(java.lang.String)
//  .refreshToken(java.lang.String)
//  .userManagedClientApplicationClientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#access_token GlueConnection#access_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.jwtToken">jwtToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.refreshToken">refreshToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.userManagedClientApplicationClientSecret">userManagedClientApplicationClientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#access_token GlueConnection#access_token}.

---

##### `jwtToken`<sup>Optional</sup> <a name="jwtToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.jwtToken"></a>

```java
public java.lang.String getJwtToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}.

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.refreshToken"></a>

```java
public java.lang.String getRefreshToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}.

---

##### `userManagedClientApplicationClientSecret`<sup>Optional</sup> <a name="userManagedClientApplicationClientSecret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.userManagedClientApplicationClientSecret"></a>

```java
public java.lang.String getUserManagedClientApplicationClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}.

---

### GlueConnectionConfig <a name="GlueConnectionConfig" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionConfig;

GlueConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .athenaProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .authenticationConfiguration(GlueConnectionAuthenticationConfiguration)
//  .catalogId(java.lang.String)
//  .connectionProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .connectionType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .matchCriteria(java.util.List<java.lang.String>)
//  .physicalConnectionRequirements(GlueConnectionPhysicalConnectionRequirements)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#name GlueConnection#name}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.athenaProperties">athenaProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionProperties">connectionProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#description GlueConnection#description}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#id GlueConnection#id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.matchCriteria">matchCriteria</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.physicalConnectionRequirements">physicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | physical_connection_requirements block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#tags GlueConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#name GlueConnection#name}.

---

##### `athenaProperties`<sup>Optional</sup> <a name="athenaProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.athenaProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAthenaProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}.

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.authenticationConfiguration"></a>

```java
public GlueConnectionAuthenticationConfiguration getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#authentication_configuration GlueConnection#authentication_configuration}

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}.

---

##### `connectionProperties`<sup>Optional</sup> <a name="connectionProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectionProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#description GlueConnection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#id GlueConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matchCriteria`<sup>Optional</sup> <a name="matchCriteria" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.matchCriteria"></a>

```java
public java.util.List<java.lang.String> getMatchCriteria();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}.

---

##### `physicalConnectionRequirements`<sup>Optional</sup> <a name="physicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.physicalConnectionRequirements"></a>

```java
public GlueConnectionPhysicalConnectionRequirements getPhysicalConnectionRequirements();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

physical_connection_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#region GlueConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#tags GlueConnection#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}.

---

### GlueConnectionPhysicalConnectionRequirements <a name="GlueConnectionPhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionPhysicalConnectionRequirements;

GlueConnectionPhysicalConnectionRequirements.builder()
//  .availabilityZone(java.lang.String)
//  .securityGroupIdList(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.securityGroupIdList">securityGroupIdList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}.

---

##### `securityGroupIdList`<sup>Optional</sup> <a name="securityGroupIdList" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.securityGroupIdList"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference;

new GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```java
public GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference;

new GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput">authorizationCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">authorizationCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationCodeInput`<sup>Optional</sup> <a name="authorizationCodeInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput"></a>

```java
public java.lang.String getAuthorizationCodeInput();
```

- *Type:* java.lang.String

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput"></a>

```java
public java.lang.String getRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `authorizationCode`<sup>Required</sup> <a name="authorizationCode" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```java
public java.lang.String getAuthorizationCode();
```

- *Type:* java.lang.String

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference;

new GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference">resetAwsManagedClientApplicationReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId">resetUserManagedClientApplicationClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsManagedClientApplicationReference` <a name="resetAwsManagedClientApplicationReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference"></a>

```java
public void resetAwsManagedClientApplicationReference()
```

##### `resetUserManagedClientApplicationClientId` <a name="resetUserManagedClientApplicationClientId" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId"></a>

```java
public void resetUserManagedClientApplicationClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput">awsManagedClientApplicationReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput">userManagedClientApplicationClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">awsManagedClientApplicationReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">userManagedClientApplicationClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsManagedClientApplicationReferenceInput`<sup>Optional</sup> <a name="awsManagedClientApplicationReferenceInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput"></a>

```java
public java.lang.String getAwsManagedClientApplicationReferenceInput();
```

- *Type:* java.lang.String

---

##### `userManagedClientApplicationClientIdInput`<sup>Optional</sup> <a name="userManagedClientApplicationClientIdInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput"></a>

```java
public java.lang.String getUserManagedClientApplicationClientIdInput();
```

- *Type:* java.lang.String

---

##### `awsManagedClientApplicationReference`<sup>Required</sup> <a name="awsManagedClientApplicationReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```java
public java.lang.String getAwsManagedClientApplicationReference();
```

- *Type:* java.lang.String

---

##### `userManagedClientApplicationClientId`<sup>Required</sup> <a name="userManagedClientApplicationClientId" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```java
public java.lang.String getUserManagedClientApplicationClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.internalValue"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference;

new GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetJwtToken">resetJwtToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetRefreshToken">resetRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret">resetUserManagedClientApplicationClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetJwtToken` <a name="resetJwtToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetJwtToken"></a>

```java
public void resetJwtToken()
```

##### `resetRefreshToken` <a name="resetRefreshToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetRefreshToken"></a>

```java
public void resetRefreshToken()
```

##### `resetUserManagedClientApplicationClientSecret` <a name="resetUserManagedClientApplicationClientSecret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret"></a>

```java
public void resetUserManagedClientApplicationClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtTokenInput">jwtTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshTokenInput">refreshTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput">userManagedClientApplicationClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtToken">jwtToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshToken">refreshToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">userManagedClientApplicationClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `jwtTokenInput`<sup>Optional</sup> <a name="jwtTokenInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtTokenInput"></a>

```java
public java.lang.String getJwtTokenInput();
```

- *Type:* java.lang.String

---

##### `refreshTokenInput`<sup>Optional</sup> <a name="refreshTokenInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshTokenInput"></a>

```java
public java.lang.String getRefreshTokenInput();
```

- *Type:* java.lang.String

---

##### `userManagedClientApplicationClientSecretInput`<sup>Optional</sup> <a name="userManagedClientApplicationClientSecretInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput"></a>

```java
public java.lang.String getUserManagedClientApplicationClientSecretInput();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `jwtToken`<sup>Required</sup> <a name="jwtToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtToken"></a>

```java
public java.lang.String getJwtToken();
```

- *Type:* java.lang.String

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshToken"></a>

```java
public java.lang.String getRefreshToken();
```

- *Type:* java.lang.String

---

##### `userManagedClientApplicationClientSecret`<sup>Required</sup> <a name="userManagedClientApplicationClientSecret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```java
public java.lang.String getUserManagedClientApplicationClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.internalValue"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference;

new GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties">putAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication">putOauth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials">putOauth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetAuthorizationCodeProperties">resetAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2ClientApplication">resetOauth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2Credentials">resetOauth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2GrantType">resetOauth2GrantType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrlParametersMap">resetTokenUrlParametersMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationCodeProperties` <a name="putAuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties"></a>

```java
public void putAuthorizationCodeProperties(GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---

##### `putOauth2ClientApplication` <a name="putOauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication"></a>

```java
public void putOauth2ClientApplication(GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---

##### `putOauth2Credentials` <a name="putOauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials"></a>

```java
public void putOauth2Credentials(GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---

##### `resetAuthorizationCodeProperties` <a name="resetAuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetAuthorizationCodeProperties"></a>

```java
public void resetAuthorizationCodeProperties()
```

##### `resetOauth2ClientApplication` <a name="resetOauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2ClientApplication"></a>

```java
public void resetOauth2ClientApplication()
```

##### `resetOauth2Credentials` <a name="resetOauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2Credentials"></a>

```java
public void resetOauth2Credentials()
```

##### `resetOauth2GrantType` <a name="resetOauth2GrantType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2GrantType"></a>

```java
public void resetOauth2GrantType()
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrl"></a>

```java
public void resetTokenUrl()
```

##### `resetTokenUrlParametersMap` <a name="resetTokenUrlParametersMap" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrlParametersMap"></a>

```java
public void resetTokenUrlParametersMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodeProperties">authorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplication">oauth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2Credentials">oauth2Credentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodePropertiesInput">authorizationCodePropertiesInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplicationInput">oauth2ClientApplicationInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2CredentialsInput">oauth2CredentialsInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantTypeInput">oauth2GrantTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMapInput">tokenUrlParametersMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantType">oauth2GrantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMap">tokenUrlParametersMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationCodeProperties`<sup>Required</sup> <a name="authorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference getAuthorizationCodeProperties();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `oauth2ClientApplication`<sup>Required</sup> <a name="oauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplication"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference getOauth2ClientApplication();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference</a>

---

##### `oauth2Credentials`<sup>Required</sup> <a name="oauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2Credentials"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference getOauth2Credentials();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference</a>

---

##### `authorizationCodePropertiesInput`<sup>Optional</sup> <a name="authorizationCodePropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodePropertiesInput"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties getAuthorizationCodePropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---

##### `oauth2ClientApplicationInput`<sup>Optional</sup> <a name="oauth2ClientApplicationInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplicationInput"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication getOauth2ClientApplicationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---

##### `oauth2CredentialsInput`<sup>Optional</sup> <a name="oauth2CredentialsInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2CredentialsInput"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials getOauth2CredentialsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---

##### `oauth2GrantTypeInput`<sup>Optional</sup> <a name="oauth2GrantTypeInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantTypeInput"></a>

```java
public java.lang.String getOauth2GrantTypeInput();
```

- *Type:* java.lang.String

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlInput"></a>

```java
public java.lang.String getTokenUrlInput();
```

- *Type:* java.lang.String

---

##### `tokenUrlParametersMapInput`<sup>Optional</sup> <a name="tokenUrlParametersMapInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTokenUrlParametersMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oauth2GrantType`<sup>Required</sup> <a name="oauth2GrantType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantType"></a>

```java
public java.lang.String getOauth2GrantType();
```

- *Type:* java.lang.String

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

---

##### `tokenUrlParametersMap`<sup>Required</sup> <a name="tokenUrlParametersMap" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTokenUrlParametersMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.internalValue"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2Properties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

---


### GlueConnectionAuthenticationConfigurationOutputReference <a name="GlueConnectionAuthenticationConfigurationOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionAuthenticationConfigurationOutputReference;

new GlueConnectionAuthenticationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials">putBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties">putOauth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials">resetBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials">resetCustomAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetOauth2Properties">resetOauth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuthenticationCredentials` <a name="putBasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials"></a>

```java
public void putBasicAuthenticationCredentials(GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `putOauth2Properties` <a name="putOauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties"></a>

```java
public void putOauth2Properties(GlueConnectionAuthenticationConfigurationOauth2Properties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

---

##### `resetBasicAuthenticationCredentials` <a name="resetBasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials"></a>

```java
public void resetBasicAuthenticationCredentials()
```

##### `resetCustomAuthenticationCredentials` <a name="resetCustomAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials"></a>

```java
public void resetCustomAuthenticationCredentials()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetOauth2Properties` <a name="resetOauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetOauth2Properties"></a>

```java
public void resetOauth2Properties()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">basicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2Properties">oauth2Properties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput">basicAuthenticationCredentialsInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput">customAuthenticationCredentialsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2PropertiesInput">oauth2PropertiesInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">customAuthenticationCredentials</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicAuthenticationCredentials`<sup>Required</sup> <a name="basicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```java
public GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference getBasicAuthenticationCredentials();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `oauth2Properties`<sup>Required</sup> <a name="oauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2Properties"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference getOauth2Properties();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `basicAuthenticationCredentialsInput`<sup>Optional</sup> <a name="basicAuthenticationCredentialsInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput"></a>

```java
public GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials getBasicAuthenticationCredentialsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `customAuthenticationCredentialsInput`<sup>Optional</sup> <a name="customAuthenticationCredentialsInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAuthenticationCredentialsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `oauth2PropertiesInput`<sup>Optional</sup> <a name="oauth2PropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2PropertiesInput"></a>

```java
public GlueConnectionAuthenticationConfigurationOauth2Properties getOauth2PropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `customAuthenticationCredentials`<sup>Required</sup> <a name="customAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAuthenticationCredentials();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.internalValue"></a>

```java
public GlueConnectionAuthenticationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

---


### GlueConnectionPhysicalConnectionRequirementsOutputReference <a name="GlueConnectionPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.glue_connection.GlueConnectionPhysicalConnectionRequirementsOutputReference;

new GlueConnectionPhysicalConnectionRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList">resetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetSecurityGroupIdList` <a name="resetSecurityGroupIdList" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList"></a>

```java
public void resetSecurityGroupIdList()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput">securityGroupIdListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">securityGroupIdList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdListInput`<sup>Optional</sup> <a name="securityGroupIdListInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```java
public GlueConnectionPhysicalConnectionRequirements getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

---



