# `codestarconnectionsHost` Submodule <a name="`codestarconnectionsHost` Submodule" id="@cdktn/provider-aws.codestarconnectionsHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsHost <a name="CodestarconnectionsHost" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host aws_codestarconnections_host}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer"></a>

```java
import io.cdktn.providers.aws.codestarconnections_host.CodestarconnectionsHost;

CodestarconnectionsHost.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .providerEndpoint(java.lang.String)
    .providerType(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(CodestarconnectionsHostTimeouts)
//  .vpcConfiguration(CodestarconnectionsHostVpcConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#name CodestarconnectionsHost#name}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.providerEndpoint">providerEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.providerType">providerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#id CodestarconnectionsHost#id}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#name CodestarconnectionsHost#name}.

---

##### `providerEndpoint`<sup>Required</sup> <a name="providerEndpoint" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.providerEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}.

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.providerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#id CodestarconnectionsHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#region CodestarconnectionsHost#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#timeouts CodestarconnectionsHost#timeouts}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#vpc_configuration CodestarconnectionsHost#vpc_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putTimeouts"></a>

```java
public void putTimeouts(CodestarconnectionsHostTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration"></a>

```java
public void putVpcConfiguration(CodestarconnectionsHostVpcConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetVpcConfiguration"></a>

```java
public void resetVpcConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodestarconnectionsHost resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isConstruct"></a>

```java
import io.cdktn.providers.aws.codestarconnections_host.CodestarconnectionsHost;

CodestarconnectionsHost.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.codestarconnections_host.CodestarconnectionsHost;

CodestarconnectionsHost.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.codestarconnections_host.CodestarconnectionsHost;

CodestarconnectionsHost.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.codestarconnections_host.CodestarconnectionsHost;

CodestarconnectionsHost.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodestarconnectionsHost.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CodestarconnectionsHost resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodestarconnectionsHost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodestarconnectionsHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CodestarconnectionsHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference">CodestarconnectionsHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference">CodestarconnectionsHostVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpointInput">providerEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerTypeInput">providerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpoint">providerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerType">providerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeouts"></a>

```java
public CodestarconnectionsHostTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference">CodestarconnectionsHostTimeoutsOutputReference</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfiguration"></a>

```java
public CodestarconnectionsHostVpcConfigurationOutputReference getVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference">CodestarconnectionsHostVpcConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerEndpointInput`<sup>Optional</sup> <a name="providerEndpointInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpointInput"></a>

```java
public java.lang.String getProviderEndpointInput();
```

- *Type:* java.lang.String

---

##### `providerTypeInput`<sup>Optional</sup> <a name="providerTypeInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerTypeInput"></a>

```java
public java.lang.String getProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeoutsInput"></a>

```java
public IResolvable|CodestarconnectionsHostTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfigurationInput"></a>

```java
public CodestarconnectionsHostVpcConfiguration getVpcConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerEndpoint`<sup>Required</sup> <a name="providerEndpoint" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpoint"></a>

```java
public java.lang.String getProviderEndpoint();
```

- *Type:* java.lang.String

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsHostConfig <a name="CodestarconnectionsHostConfig" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.codestarconnections_host.CodestarconnectionsHostConfig;

CodestarconnectionsHostConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .providerEndpoint(java.lang.String)
    .providerType(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(CodestarconnectionsHostTimeouts)
//  .vpcConfiguration(CodestarconnectionsHostVpcConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#name CodestarconnectionsHost#name}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerEndpoint">providerEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerType">providerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#id CodestarconnectionsHost#id}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#name CodestarconnectionsHost#name}.

---

##### `providerEndpoint`<sup>Required</sup> <a name="providerEndpoint" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerEndpoint"></a>

```java
public java.lang.String getProviderEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}.

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#id CodestarconnectionsHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#region CodestarconnectionsHost#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.timeouts"></a>

```java
public CodestarconnectionsHostTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#timeouts CodestarconnectionsHost#timeouts}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.vpcConfiguration"></a>

```java
public CodestarconnectionsHostVpcConfiguration getVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#vpc_configuration CodestarconnectionsHost#vpc_configuration}

---

### CodestarconnectionsHostTimeouts <a name="CodestarconnectionsHostTimeouts" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.codestarconnections_host.CodestarconnectionsHostTimeouts;

CodestarconnectionsHostTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#create CodestarconnectionsHost#create}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#delete CodestarconnectionsHost#delete}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#update CodestarconnectionsHost#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#create CodestarconnectionsHost#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#delete CodestarconnectionsHost#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#update CodestarconnectionsHost#update}.

---

### CodestarconnectionsHostVpcConfiguration <a name="CodestarconnectionsHostVpcConfiguration" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.codestarconnections_host.CodestarconnectionsHostVpcConfiguration;

CodestarconnectionsHostVpcConfiguration.builder()
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
//  .tlsCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#security_group_ids CodestarconnectionsHost#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#subnet_ids CodestarconnectionsHost#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#vpc_id CodestarconnectionsHost#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.tlsCertificate">tlsCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#tls_certificate CodestarconnectionsHost#tls_certificate}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#security_group_ids CodestarconnectionsHost#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#subnet_ids CodestarconnectionsHost#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#vpc_id CodestarconnectionsHost#vpc_id}.

---

##### `tlsCertificate`<sup>Optional</sup> <a name="tlsCertificate" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.tlsCertificate"></a>

```java
public java.lang.String getTlsCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codestarconnections_host#tls_certificate CodestarconnectionsHost#tls_certificate}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarconnectionsHostTimeoutsOutputReference <a name="CodestarconnectionsHostTimeoutsOutputReference" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.codestarconnections_host.CodestarconnectionsHostTimeoutsOutputReference;

new CodestarconnectionsHostTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CodestarconnectionsHostTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>

---


### CodestarconnectionsHostVpcConfigurationOutputReference <a name="CodestarconnectionsHostVpcConfigurationOutputReference" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.codestarconnections_host.CodestarconnectionsHostVpcConfigurationOutputReference;

new CodestarconnectionsHostVpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate">resetTlsCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTlsCertificate` <a name="resetTlsCertificate" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate"></a>

```java
public void resetTlsCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput">tlsCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate">tlsCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsCertificateInput`<sup>Optional</sup> <a name="tlsCertificateInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput"></a>

```java
public java.lang.String getTlsCertificateInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsCertificate`<sup>Required</sup> <a name="tlsCertificate" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate"></a>

```java
public java.lang.String getTlsCertificate();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.internalValue"></a>

```java
public CodestarconnectionsHostVpcConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

---



