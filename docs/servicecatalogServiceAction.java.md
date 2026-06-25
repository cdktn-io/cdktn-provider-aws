# `servicecatalogServiceAction` Submodule <a name="`servicecatalogServiceAction` Submodule" id="@cdktn/provider-aws.servicecatalogServiceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogServiceAction <a name="ServicecatalogServiceAction" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action aws_servicecatalog_service_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer"></a>

```java
import io.cdktn.providers.aws.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .definition(ServicecatalogServiceActionDefinition)
    .name(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ServicecatalogServiceActionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.definition">definition</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | definition block. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#description ServicecatalogServiceAction#description}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#id ServicecatalogServiceAction#id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.definition"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#definition ServicecatalogServiceAction#definition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.acceptLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#description ServicecatalogServiceAction#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#id ServicecatalogServiceAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#region ServicecatalogServiceAction#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#timeouts ServicecatalogServiceAction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefinition` <a name="putDefinition" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition"></a>

```java
public void putDefinition(ServicecatalogServiceActionDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putTimeouts"></a>

```java
public void putTimeouts(ServicecatalogServiceActionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetAcceptLanguage"></a>

```java
public void resetAcceptLanguage()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogServiceAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct"></a>

```java
import io.cdktn.providers.aws.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicecatalogServiceAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ServicecatalogServiceAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicecatalogServiceAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicecatalogServiceAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogServiceAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference">ServicecatalogServiceActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference">ServicecatalogServiceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionInput">definitionInput</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definition"></a>

```java
public ServicecatalogServiceActionDefinitionOutputReference getDefinition();
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference">ServicecatalogServiceActionDefinitionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeouts"></a>

```java
public ServicecatalogServiceActionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference">ServicecatalogServiceActionTimeoutsOutputReference</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguageInput"></a>

```java
public java.lang.String getAcceptLanguageInput();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionInput"></a>

```java
public ServicecatalogServiceActionDefinition getDefinitionInput();
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeoutsInput"></a>

```java
public IResolvable|ServicecatalogServiceActionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a>

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogServiceActionConfig <a name="ServicecatalogServiceActionConfig" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.servicecatalog_service_action.ServicecatalogServiceActionConfig;

ServicecatalogServiceActionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .definition(ServicecatalogServiceActionDefinition)
    .name(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ServicecatalogServiceActionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | definition block. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#description ServicecatalogServiceAction#description}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#id ServicecatalogServiceAction#id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.definition"></a>

```java
public ServicecatalogServiceActionDefinition getDefinition();
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#definition ServicecatalogServiceAction#definition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#description ServicecatalogServiceAction#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#id ServicecatalogServiceAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#region ServicecatalogServiceAction#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.timeouts"></a>

```java
public ServicecatalogServiceActionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#timeouts ServicecatalogServiceAction#timeouts}

---

### ServicecatalogServiceActionDefinition <a name="ServicecatalogServiceActionDefinition" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.Initializer"></a>

```java
import io.cdktn.providers.aws.servicecatalog_service_action.ServicecatalogServiceActionDefinition;

ServicecatalogServiceActionDefinition.builder()
    .name(java.lang.String)
    .version(java.lang.String)
//  .assumeRole(java.lang.String)
//  .parameters(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#version ServicecatalogServiceAction#version}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.assumeRole">assumeRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#assume_role ServicecatalogServiceAction#assume_role}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#parameters ServicecatalogServiceAction#parameters}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#type ServicecatalogServiceAction#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#version ServicecatalogServiceAction#version}.

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.assumeRole"></a>

```java
public java.lang.String getAssumeRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#assume_role ServicecatalogServiceAction#assume_role}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#parameters ServicecatalogServiceAction#parameters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#type ServicecatalogServiceAction#type}.

---

### ServicecatalogServiceActionTimeouts <a name="ServicecatalogServiceActionTimeouts" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.servicecatalog_service_action.ServicecatalogServiceActionTimeouts;

ServicecatalogServiceActionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#create ServicecatalogServiceAction#create}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#delete ServicecatalogServiceAction#delete}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#read ServicecatalogServiceAction#read}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#update ServicecatalogServiceAction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#create ServicecatalogServiceAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#delete ServicecatalogServiceAction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#read ServicecatalogServiceAction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/servicecatalog_service_action#update ServicecatalogServiceAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogServiceActionDefinitionOutputReference <a name="ServicecatalogServiceActionDefinitionOutputReference" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.servicecatalog_service_action.ServicecatalogServiceActionDefinitionOutputReference;

new ServicecatalogServiceActionDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetAssumeRole"></a>

```java
public void resetAssumeRole()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRoleInput">assumeRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRole">assumeRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRoleInput"></a>

```java
public java.lang.String getAssumeRoleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `assumeRole`<sup>Required</sup> <a name="assumeRole" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRole"></a>

```java
public java.lang.String getAssumeRole();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.internalValue"></a>

```java
public ServicecatalogServiceActionDefinition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

---


### ServicecatalogServiceActionTimeoutsOutputReference <a name="ServicecatalogServiceActionTimeoutsOutputReference" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.servicecatalog_service_action.ServicecatalogServiceActionTimeoutsOutputReference;

new ServicecatalogServiceActionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogServiceActionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a>

---



