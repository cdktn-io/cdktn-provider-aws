# `vpcIpamPreviewNextCidr` Submodule <a name="`vpcIpamPreviewNextCidr` Submodule" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPreviewNextCidr <a name="VpcIpamPreviewNextCidr" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_preview_next_cidr.VpcIpamPreviewNextCidr;

VpcIpamPreviewNextCidr.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipamPoolId(java.lang.String)
//  .disallowedCidrs(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .netmaskLength(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.ipamPoolId">ipamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#ipam_pool_id VpcIpamPreviewNextCidr#ipam_pool_id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.disallowedCidrs">disallowedCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#disallowed_cidrs VpcIpamPreviewNextCidr#disallowed_cidrs}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#id VpcIpamPreviewNextCidr#id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.netmaskLength">netmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#netmask_length VpcIpamPreviewNextCidr#netmask_length}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.ipamPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#ipam_pool_id VpcIpamPreviewNextCidr#ipam_pool_id}.

---

##### `disallowedCidrs`<sup>Optional</sup> <a name="disallowedCidrs" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.disallowedCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#disallowed_cidrs VpcIpamPreviewNextCidr#disallowed_cidrs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#id VpcIpamPreviewNextCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmaskLength`<sup>Optional</sup> <a name="netmaskLength" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.netmaskLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#netmask_length VpcIpamPreviewNextCidr#netmask_length}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#region VpcIpamPreviewNextCidr#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetDisallowedCidrs">resetDisallowedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetNetmaskLength">resetNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisallowedCidrs` <a name="resetDisallowedCidrs" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetDisallowedCidrs"></a>

```java
public void resetDisallowedCidrs()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetId"></a>

```java
public void resetId()
```

##### `resetNetmaskLength` <a name="resetNetmaskLength" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetNetmaskLength"></a>

```java
public void resetNetmaskLength()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpcIpamPreviewNextCidr resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isConstruct"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_preview_next_cidr.VpcIpamPreviewNextCidr;

VpcIpamPreviewNextCidr.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_preview_next_cidr.VpcIpamPreviewNextCidr;

VpcIpamPreviewNextCidr.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_preview_next_cidr.VpcIpamPreviewNextCidr;

VpcIpamPreviewNextCidr.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_preview_next_cidr.VpcIpamPreviewNextCidr;

VpcIpamPreviewNextCidr.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpcIpamPreviewNextCidr.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VpcIpamPreviewNextCidr resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpcIpamPreviewNextCidr to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpcIpamPreviewNextCidr that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VpcIpamPreviewNextCidr to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.disallowedCidrsInput">disallowedCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.ipamPoolIdInput">ipamPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.netmaskLengthInput">netmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.disallowedCidrs">disallowedCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.ipamPoolId">ipamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.netmaskLength">netmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `disallowedCidrsInput`<sup>Optional</sup> <a name="disallowedCidrsInput" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.disallowedCidrsInput"></a>

```java
public java.util.List<java.lang.String> getDisallowedCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipamPoolIdInput`<sup>Optional</sup> <a name="ipamPoolIdInput" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.ipamPoolIdInput"></a>

```java
public java.lang.String getIpamPoolIdInput();
```

- *Type:* java.lang.String

---

##### `netmaskLengthInput`<sup>Optional</sup> <a name="netmaskLengthInput" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.netmaskLengthInput"></a>

```java
public java.lang.Number getNetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `disallowedCidrs`<sup>Required</sup> <a name="disallowedCidrs" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.disallowedCidrs"></a>

```java
public java.util.List<java.lang.String> getDisallowedCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.ipamPoolId"></a>

```java
public java.lang.String getIpamPoolId();
```

- *Type:* java.lang.String

---

##### `netmaskLength`<sup>Required</sup> <a name="netmaskLength" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.netmaskLength"></a>

```java
public java.lang.Number getNetmaskLength();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPreviewNextCidrConfig <a name="VpcIpamPreviewNextCidrConfig" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_preview_next_cidr.VpcIpamPreviewNextCidrConfig;

VpcIpamPreviewNextCidrConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipamPoolId(java.lang.String)
//  .disallowedCidrs(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .netmaskLength(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.ipamPoolId">ipamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#ipam_pool_id VpcIpamPreviewNextCidr#ipam_pool_id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.disallowedCidrs">disallowedCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#disallowed_cidrs VpcIpamPreviewNextCidr#disallowed_cidrs}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#id VpcIpamPreviewNextCidr#id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.netmaskLength">netmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#netmask_length VpcIpamPreviewNextCidr#netmask_length}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.ipamPoolId"></a>

```java
public java.lang.String getIpamPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#ipam_pool_id VpcIpamPreviewNextCidr#ipam_pool_id}.

---

##### `disallowedCidrs`<sup>Optional</sup> <a name="disallowedCidrs" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.disallowedCidrs"></a>

```java
public java.util.List<java.lang.String> getDisallowedCidrs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#disallowed_cidrs VpcIpamPreviewNextCidr#disallowed_cidrs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#id VpcIpamPreviewNextCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmaskLength`<sup>Optional</sup> <a name="netmaskLength" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.netmaskLength"></a>

```java
public java.lang.Number getNetmaskLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#netmask_length VpcIpamPreviewNextCidr#netmask_length}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr#region VpcIpamPreviewNextCidr#region}

---



