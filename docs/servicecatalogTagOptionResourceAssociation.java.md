# `servicecatalogTagOptionResourceAssociation` Submodule <a name="`servicecatalogTagOptionResourceAssociation` Submodule" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogTagOptionResourceAssociation <a name="ServicecatalogTagOptionResourceAssociation" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association aws_servicecatalog_tag_option_resource_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.servicecatalog_tag_option_resource_association.ServicecatalogTagOptionResourceAssociation;

ServicecatalogTagOptionResourceAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceId(java.lang.String)
    .tagOptionId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ServicecatalogTagOptionResourceAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.tagOptionId">tagOptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}.

---

##### `tagOptionId`<sup>Required</sup> <a name="tagOptionId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.tagOptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#region ServicecatalogTagOptionResourceAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#timeouts ServicecatalogTagOptionResourceAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.putTimeouts"></a>

```java
public void putTimeouts(ServicecatalogTagOptionResourceAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogTagOptionResourceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.servicecatalog_tag_option_resource_association.ServicecatalogTagOptionResourceAssociation;

ServicecatalogTagOptionResourceAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.servicecatalog_tag_option_resource_association.ServicecatalogTagOptionResourceAssociation;

ServicecatalogTagOptionResourceAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.servicecatalog_tag_option_resource_association.ServicecatalogTagOptionResourceAssociation;

ServicecatalogTagOptionResourceAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.servicecatalog_tag_option_resource_association.ServicecatalogTagOptionResourceAssociation;

ServicecatalogTagOptionResourceAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicecatalogTagOptionResourceAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ServicecatalogTagOptionResourceAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicecatalogTagOptionResourceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicecatalogTagOptionResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogTagOptionResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceCreatedTime">resourceCreatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceDescription">resourceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference">ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionIdInput">tagOptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionId">tagOptionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `resourceCreatedTime`<sup>Required</sup> <a name="resourceCreatedTime" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceCreatedTime"></a>

```java
public java.lang.String getResourceCreatedTime();
```

- *Type:* java.lang.String

---

##### `resourceDescription`<sup>Required</sup> <a name="resourceDescription" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceDescription"></a>

```java
public java.lang.String getResourceDescription();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeouts"></a>

```java
public ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference">ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `tagOptionIdInput`<sup>Optional</sup> <a name="tagOptionIdInput" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionIdInput"></a>

```java
public java.lang.String getTagOptionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeoutsInput"></a>

```java
public IResolvable|ServicecatalogTagOptionResourceAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `tagOptionId`<sup>Required</sup> <a name="tagOptionId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionId"></a>

```java
public java.lang.String getTagOptionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogTagOptionResourceAssociationConfig <a name="ServicecatalogTagOptionResourceAssociationConfig" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.servicecatalog_tag_option_resource_association.ServicecatalogTagOptionResourceAssociationConfig;

ServicecatalogTagOptionResourceAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceId(java.lang.String)
    .tagOptionId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ServicecatalogTagOptionResourceAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.tagOptionId">tagOptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}.

---

##### `tagOptionId`<sup>Required</sup> <a name="tagOptionId" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.tagOptionId"></a>

```java
public java.lang.String getTagOptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#region ServicecatalogTagOptionResourceAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.timeouts"></a>

```java
public ServicecatalogTagOptionResourceAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#timeouts ServicecatalogTagOptionResourceAssociation#timeouts}

---

### ServicecatalogTagOptionResourceAssociationTimeouts <a name="ServicecatalogTagOptionResourceAssociationTimeouts" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.servicecatalog_tag_option_resource_association.ServicecatalogTagOptionResourceAssociationTimeouts;

ServicecatalogTagOptionResourceAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#create ServicecatalogTagOptionResourceAssociation#create}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#delete ServicecatalogTagOptionResourceAssociation#delete}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#read ServicecatalogTagOptionResourceAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#create ServicecatalogTagOptionResourceAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#delete ServicecatalogTagOptionResourceAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_tag_option_resource_association#read ServicecatalogTagOptionResourceAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference <a name="ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.servicecatalog_tag_option_resource_association.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference;

new ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogTagOptionResourceAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a>

---



