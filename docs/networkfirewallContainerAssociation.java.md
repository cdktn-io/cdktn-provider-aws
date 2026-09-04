# `networkfirewallContainerAssociation` Submodule <a name="`networkfirewallContainerAssociation` Submodule" id="@cdktn/provider-aws.networkfirewallContainerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallContainerAssociation <a name="NetworkfirewallContainerAssociation" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association aws_networkfirewall_container_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociation;

NetworkfirewallContainerAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .containerAssociationName(java.lang.String)
    .type(java.lang.String)
//  .containerMonitoringConfiguration(IResolvable|java.util.List<NetworkfirewallContainerAssociationContainerMonitoringConfiguration>)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkfirewallContainerAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.containerAssociationName">containerAssociationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.containerMonitoringConfiguration">containerMonitoringConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>></code> | container_monitoring_configuration block. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerAssociationName`<sup>Required</sup> <a name="containerAssociationName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.containerAssociationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}.

---

##### `containerMonitoringConfiguration`<sup>Optional</sup> <a name="containerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.containerMonitoringConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>>

container_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#container_monitoring_configuration NetworkfirewallContainerAssociation#container_monitoring_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#region NetworkfirewallContainerAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#timeouts NetworkfirewallContainerAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfiguration">putContainerMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetContainerMonitoringConfiguration">resetContainerMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainerMonitoringConfiguration` <a name="putContainerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfiguration"></a>

```java
public void putContainerMonitoringConfiguration(IResolvable|java.util.List<NetworkfirewallContainerAssociationContainerMonitoringConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTimeouts"></a>

```java
public void putTimeouts(NetworkfirewallContainerAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

---

##### `resetContainerMonitoringConfiguration` <a name="resetContainerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetContainerMonitoringConfiguration"></a>

```java
public void resetContainerMonitoringConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociation;

NetworkfirewallContainerAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociation;

NetworkfirewallContainerAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociation;

NetworkfirewallContainerAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociation;

NetworkfirewallContainerAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkfirewallContainerAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkfirewallContainerAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkfirewallContainerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallContainerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn">containerAssociationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfiguration">containerMonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount">resolvedCidrCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference">NetworkfirewallContainerAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.updateToken">updateToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput">containerAssociationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationInput">containerMonitoringConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName">containerAssociationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerAssociationArn`<sup>Required</sup> <a name="containerAssociationArn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn"></a>

```java
public java.lang.String getContainerAssociationArn();
```

- *Type:* java.lang.String

---

##### `containerMonitoringConfiguration`<sup>Required</sup> <a name="containerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfiguration"></a>

```java
public NetworkfirewallContainerAssociationContainerMonitoringConfigurationList getContainerMonitoringConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationList</a>

---

##### `resolvedCidrCount`<sup>Required</sup> <a name="resolvedCidrCount" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount"></a>

```java
public java.lang.Number getResolvedCidrCount();
```

- *Type:* java.lang.Number

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeouts"></a>

```java
public NetworkfirewallContainerAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference">NetworkfirewallContainerAssociationTimeoutsOutputReference</a>

---

##### `updateToken`<sup>Required</sup> <a name="updateToken" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.updateToken"></a>

```java
public java.lang.String getUpdateToken();
```

- *Type:* java.lang.String

---

##### `containerAssociationNameInput`<sup>Optional</sup> <a name="containerAssociationNameInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput"></a>

```java
public java.lang.String getContainerAssociationNameInput();
```

- *Type:* java.lang.String

---

##### `containerMonitoringConfigurationInput`<sup>Optional</sup> <a name="containerMonitoringConfigurationInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationInput"></a>

```java
public IResolvable|java.util.List<NetworkfirewallContainerAssociationContainerMonitoringConfiguration> getContainerMonitoringConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeoutsInput"></a>

```java
public IResolvable|NetworkfirewallContainerAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `containerAssociationName`<sup>Required</sup> <a name="containerAssociationName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName"></a>

```java
public java.lang.String getContainerAssociationName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallContainerAssociationConfig <a name="NetworkfirewallContainerAssociationConfig" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociationConfig;

NetworkfirewallContainerAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .containerAssociationName(java.lang.String)
    .type(java.lang.String)
//  .containerMonitoringConfiguration(IResolvable|java.util.List<NetworkfirewallContainerAssociationContainerMonitoringConfiguration>)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkfirewallContainerAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName">containerAssociationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfiguration">containerMonitoringConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>></code> | container_monitoring_configuration block. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerAssociationName`<sup>Required</sup> <a name="containerAssociationName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName"></a>

```java
public java.lang.String getContainerAssociationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}.

---

##### `containerMonitoringConfiguration`<sup>Optional</sup> <a name="containerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfiguration"></a>

```java
public IResolvable|java.util.List<NetworkfirewallContainerAssociationContainerMonitoringConfiguration> getContainerMonitoringConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>>

container_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#container_monitoring_configuration NetworkfirewallContainerAssociation#container_monitoring_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#region NetworkfirewallContainerAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.timeouts"></a>

```java
public NetworkfirewallContainerAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#timeouts NetworkfirewallContainerAssociation#timeouts}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfiguration <a name="NetworkfirewallContainerAssociationContainerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociationContainerMonitoringConfiguration;

NetworkfirewallContainerAssociationContainerMonitoringConfiguration.builder()
    .clusterArn(java.lang.String)
//  .attributeFilter(IResolvable|java.util.List<NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#cluster_arn NetworkfirewallContainerAssociation#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.attributeFilter">attributeFilter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>></code> | attribute_filter block. |

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#cluster_arn NetworkfirewallContainerAssociation#cluster_arn}.

---

##### `attributeFilter`<sup>Optional</sup> <a name="attributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.attributeFilter"></a>

```java
public IResolvable|java.util.List<NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter> getAttributeFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>>

attribute_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#attribute_filter NetworkfirewallContainerAssociation#attribute_filter}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter;

NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}.

---

### NetworkfirewallContainerAssociationTimeouts <a name="NetworkfirewallContainerAssociationTimeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociationTimeouts;

NetworkfirewallContainerAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#create NetworkfirewallContainerAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#delete NetworkfirewallContainerAssociation#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_container_association#update NetworkfirewallContainerAssociation#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.get"></a>

```java
public NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>>

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationList" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.get"></a>

```java
public NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkfirewallContainerAssociationContainerMonitoringConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>>

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.putAttributeFilter">putAttributeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resetAttributeFilter">resetAttributeFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributeFilter` <a name="putAttributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.putAttributeFilter"></a>

```java
public void putAttributeFilter(IResolvable|java.util.List<NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.putAttributeFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>>

---

##### `resetAttributeFilter` <a name="resetAttributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resetAttributeFilter"></a>

```java
public void resetAttributeFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilter">attributeFilter</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilterInput">attributeFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeFilter`<sup>Required</sup> <a name="attributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilter"></a>

```java
public NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList getAttributeFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList</a>

---

##### `attributeFilterInput`<sup>Optional</sup> <a name="attributeFilterInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilterInput"></a>

```java
public IResolvable|java.util.List<NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter> getAttributeFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>>

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>

---


### NetworkfirewallContainerAssociationTimeoutsOutputReference <a name="NetworkfirewallContainerAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_container_association.NetworkfirewallContainerAssociationTimeoutsOutputReference;

new NetworkfirewallContainerAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkfirewallContainerAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

---



