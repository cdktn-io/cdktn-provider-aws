# `vpclatticeServiceNetworkServiceAssociation` Submodule <a name="`vpclatticeServiceNetworkServiceAssociation` Submodule" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetworkServiceAssociation <a name="VpclatticeServiceNetworkServiceAssociation" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association aws_vpclattice_service_network_service_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.vpclattice_service_network_service_association.VpclatticeServiceNetworkServiceAssociation;

VpclatticeServiceNetworkServiceAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceIdentifier(java.lang.String)
    .serviceNetworkIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpclatticeServiceNetworkServiceAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#service_identifier VpclatticeServiceNetworkServiceAssociation#service_identifier}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#service_network_identifier VpclatticeServiceNetworkServiceAssociation#service_network_identifier}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#id VpclatticeServiceNetworkServiceAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#tags VpclatticeServiceNetworkServiceAssociation#tags}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#tags_all VpclatticeServiceNetworkServiceAssociation#tags_all}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.serviceIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#service_identifier VpclatticeServiceNetworkServiceAssociation#service_identifier}.

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.serviceNetworkIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#service_network_identifier VpclatticeServiceNetworkServiceAssociation#service_network_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#id VpclatticeServiceNetworkServiceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#region VpclatticeServiceNetworkServiceAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#tags VpclatticeServiceNetworkServiceAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#tags_all VpclatticeServiceNetworkServiceAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#timeouts VpclatticeServiceNetworkServiceAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTimeouts"></a>

```java
public void putTimeouts(VpclatticeServiceNetworkServiceAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeServiceNetworkServiceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.vpclattice_service_network_service_association.VpclatticeServiceNetworkServiceAssociation;

VpclatticeServiceNetworkServiceAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.vpclattice_service_network_service_association.VpclatticeServiceNetworkServiceAssociation;

VpclatticeServiceNetworkServiceAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.vpclattice_service_network_service_association.VpclatticeServiceNetworkServiceAssociation;

VpclatticeServiceNetworkServiceAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.vpclattice_service_network_service_association.VpclatticeServiceNetworkServiceAssociation;

VpclatticeServiceNetworkServiceAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpclatticeServiceNetworkServiceAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VpclatticeServiceNetworkServiceAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpclatticeServiceNetworkServiceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpclatticeServiceNetworkServiceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetworkServiceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.customDomainName">customDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntry">dnsEntry</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList">VpclatticeServiceNetworkServiceAssociationDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference">VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifierInput">serviceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifierInput">serviceNetworkIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `customDomainName`<sup>Required</sup> <a name="customDomainName" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.customDomainName"></a>

```java
public java.lang.String getCustomDomainName();
```

- *Type:* java.lang.String

---

##### `dnsEntry`<sup>Required</sup> <a name="dnsEntry" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntry"></a>

```java
public VpclatticeServiceNetworkServiceAssociationDnsEntryList getDnsEntry();
```

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList">VpclatticeServiceNetworkServiceAssociationDnsEntryList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.timeouts"></a>

```java
public VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference">VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceIdentifierInput`<sup>Optional</sup> <a name="serviceIdentifierInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifierInput"></a>

```java
public java.lang.String getServiceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `serviceNetworkIdentifierInput`<sup>Optional</sup> <a name="serviceNetworkIdentifierInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifierInput"></a>

```java
public java.lang.String getServiceNetworkIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.timeoutsInput"></a>

```java
public IResolvable|VpclatticeServiceNetworkServiceAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifier"></a>

```java
public java.lang.String getServiceIdentifier();
```

- *Type:* java.lang.String

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifier"></a>

```java
public java.lang.String getServiceNetworkIdentifier();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkServiceAssociationConfig <a name="VpclatticeServiceNetworkServiceAssociationConfig" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.vpclattice_service_network_service_association.VpclatticeServiceNetworkServiceAssociationConfig;

VpclatticeServiceNetworkServiceAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceIdentifier(java.lang.String)
    .serviceNetworkIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpclatticeServiceNetworkServiceAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#service_identifier VpclatticeServiceNetworkServiceAssociation#service_identifier}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#service_network_identifier VpclatticeServiceNetworkServiceAssociation#service_network_identifier}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#id VpclatticeServiceNetworkServiceAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#tags VpclatticeServiceNetworkServiceAssociation#tags}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#tags_all VpclatticeServiceNetworkServiceAssociation#tags_all}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceIdentifier"></a>

```java
public java.lang.String getServiceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#service_identifier VpclatticeServiceNetworkServiceAssociation#service_identifier}.

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceNetworkIdentifier"></a>

```java
public java.lang.String getServiceNetworkIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#service_network_identifier VpclatticeServiceNetworkServiceAssociation#service_network_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#id VpclatticeServiceNetworkServiceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#region VpclatticeServiceNetworkServiceAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#tags VpclatticeServiceNetworkServiceAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#tags_all VpclatticeServiceNetworkServiceAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.timeouts"></a>

```java
public VpclatticeServiceNetworkServiceAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#timeouts VpclatticeServiceNetworkServiceAssociation#timeouts}

---

### VpclatticeServiceNetworkServiceAssociationDnsEntry <a name="VpclatticeServiceNetworkServiceAssociationDnsEntry" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry.Initializer"></a>

```java
import io.cdktn.providers.aws.vpclattice_service_network_service_association.VpclatticeServiceNetworkServiceAssociationDnsEntry;

VpclatticeServiceNetworkServiceAssociationDnsEntry.builder()
    .build();
```


### VpclatticeServiceNetworkServiceAssociationTimeouts <a name="VpclatticeServiceNetworkServiceAssociationTimeouts" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.vpclattice_service_network_service_association.VpclatticeServiceNetworkServiceAssociationTimeouts;

VpclatticeServiceNetworkServiceAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#create VpclatticeServiceNetworkServiceAssociation#create}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#delete VpclatticeServiceNetworkServiceAssociation#delete}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#update VpclatticeServiceNetworkServiceAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#create VpclatticeServiceNetworkServiceAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#delete VpclatticeServiceNetworkServiceAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpclattice_service_network_service_association#update VpclatticeServiceNetworkServiceAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkServiceAssociationDnsEntryList <a name="VpclatticeServiceNetworkServiceAssociationDnsEntryList" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer"></a>

```java
import io.cdktn.providers.aws.vpclattice_service_network_service_association.VpclatticeServiceNetworkServiceAssociationDnsEntryList;

new VpclatticeServiceNetworkServiceAssociationDnsEntryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.get"></a>

```java
public VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference <a name="VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.vpclattice_service_network_service_association.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference;

new VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.internalValue"></a>

```java
public VpclatticeServiceNetworkServiceAssociationDnsEntry getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a>

---


### VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference <a name="VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.vpclattice_service_network_service_association.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference;

new VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VpclatticeServiceNetworkServiceAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a>

---



