# `vpcIpamResourceDiscovery` Submodule <a name="`vpcIpamResourceDiscovery` Submodule" id="@cdktn/provider-aws.vpcIpamResourceDiscovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamResourceDiscovery <a name="VpcIpamResourceDiscovery" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery aws_vpc_ipam_resource_discovery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscovery;

VpcIpamResourceDiscovery.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .operatingRegions(IResolvable|java.util.List<VpcIpamResourceDiscoveryOperatingRegions>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .organizationalUnitExclusion(IResolvable|java.util.List<VpcIpamResourceDiscoveryOrganizationalUnitExclusion>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpcIpamResourceDiscoveryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.operatingRegions">operatingRegions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions">VpcIpamResourceDiscoveryOperatingRegions</a>></code> | operating_regions block. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#description VpcIpamResourceDiscovery#description}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#id VpcIpamResourceDiscovery#id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.organizationalUnitExclusion">organizationalUnitExclusion</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion">VpcIpamResourceDiscoveryOrganizationalUnitExclusion</a>></code> | organizational_unit_exclusion block. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#tags VpcIpamResourceDiscovery#tags}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#tags_all VpcIpamResourceDiscovery#tags_all}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `operatingRegions`<sup>Required</sup> <a name="operatingRegions" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.operatingRegions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions">VpcIpamResourceDiscoveryOperatingRegions</a>>

operating_regions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#operating_regions VpcIpamResourceDiscovery#operating_regions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#description VpcIpamResourceDiscovery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#id VpcIpamResourceDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationalUnitExclusion`<sup>Optional</sup> <a name="organizationalUnitExclusion" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.organizationalUnitExclusion"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion">VpcIpamResourceDiscoveryOrganizationalUnitExclusion</a>>

organizational_unit_exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#organizational_unit_exclusion VpcIpamResourceDiscovery#organizational_unit_exclusion}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#region VpcIpamResourceDiscovery#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#tags VpcIpamResourceDiscovery#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#tags_all VpcIpamResourceDiscovery#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#timeouts VpcIpamResourceDiscovery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putOperatingRegions">putOperatingRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putOrganizationalUnitExclusion">putOrganizationalUnitExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetOrganizationalUnitExclusion">resetOrganizationalUnitExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOperatingRegions` <a name="putOperatingRegions" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putOperatingRegions"></a>

```java
public void putOperatingRegions(IResolvable|java.util.List<VpcIpamResourceDiscoveryOperatingRegions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putOperatingRegions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions">VpcIpamResourceDiscoveryOperatingRegions</a>>

---

##### `putOrganizationalUnitExclusion` <a name="putOrganizationalUnitExclusion" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putOrganizationalUnitExclusion"></a>

```java
public void putOrganizationalUnitExclusion(IResolvable|java.util.List<VpcIpamResourceDiscoveryOrganizationalUnitExclusion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putOrganizationalUnitExclusion.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion">VpcIpamResourceDiscoveryOrganizationalUnitExclusion</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putTimeouts"></a>

```java
public void putTimeouts(VpcIpamResourceDiscoveryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetId"></a>

```java
public void resetId()
```

##### `resetOrganizationalUnitExclusion` <a name="resetOrganizationalUnitExclusion" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetOrganizationalUnitExclusion"></a>

```java
public void resetOrganizationalUnitExclusion()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpcIpamResourceDiscovery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isConstruct"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscovery;

VpcIpamResourceDiscovery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscovery;

VpcIpamResourceDiscovery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscovery;

VpcIpamResourceDiscovery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscovery;

VpcIpamResourceDiscovery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpcIpamResourceDiscovery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VpcIpamResourceDiscovery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpcIpamResourceDiscovery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpcIpamResourceDiscovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VpcIpamResourceDiscovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.ipamResourceDiscoveryRegion">ipamResourceDiscoveryRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.isDefault">isDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.operatingRegions">operatingRegions</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList">VpcIpamResourceDiscoveryOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.organizationalUnitExclusion">organizationalUnitExclusion</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList">VpcIpamResourceDiscoveryOrganizationalUnitExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference">VpcIpamResourceDiscoveryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.operatingRegionsInput">operatingRegionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions">VpcIpamResourceDiscoveryOperatingRegions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.organizationalUnitExclusionInput">organizationalUnitExclusionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion">VpcIpamResourceDiscoveryOrganizationalUnitExclusion</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ipamResourceDiscoveryRegion`<sup>Required</sup> <a name="ipamResourceDiscoveryRegion" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.ipamResourceDiscoveryRegion"></a>

```java
public java.lang.String getIpamResourceDiscoveryRegion();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `operatingRegions`<sup>Required</sup> <a name="operatingRegions" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.operatingRegions"></a>

```java
public VpcIpamResourceDiscoveryOperatingRegionsList getOperatingRegions();
```

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList">VpcIpamResourceDiscoveryOperatingRegionsList</a>

---

##### `organizationalUnitExclusion`<sup>Required</sup> <a name="organizationalUnitExclusion" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.organizationalUnitExclusion"></a>

```java
public VpcIpamResourceDiscoveryOrganizationalUnitExclusionList getOrganizationalUnitExclusion();
```

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList">VpcIpamResourceDiscoveryOrganizationalUnitExclusionList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.timeouts"></a>

```java
public VpcIpamResourceDiscoveryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference">VpcIpamResourceDiscoveryTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `operatingRegionsInput`<sup>Optional</sup> <a name="operatingRegionsInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.operatingRegionsInput"></a>

```java
public IResolvable|java.util.List<VpcIpamResourceDiscoveryOperatingRegions> getOperatingRegionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions">VpcIpamResourceDiscoveryOperatingRegions</a>>

---

##### `organizationalUnitExclusionInput`<sup>Optional</sup> <a name="organizationalUnitExclusionInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.organizationalUnitExclusionInput"></a>

```java
public IResolvable|java.util.List<VpcIpamResourceDiscoveryOrganizationalUnitExclusion> getOrganizationalUnitExclusionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion">VpcIpamResourceDiscoveryOrganizationalUnitExclusion</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.timeoutsInput"></a>

```java
public IResolvable|VpcIpamResourceDiscoveryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamResourceDiscoveryConfig <a name="VpcIpamResourceDiscoveryConfig" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscoveryConfig;

VpcIpamResourceDiscoveryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .operatingRegions(IResolvable|java.util.List<VpcIpamResourceDiscoveryOperatingRegions>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .organizationalUnitExclusion(IResolvable|java.util.List<VpcIpamResourceDiscoveryOrganizationalUnitExclusion>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpcIpamResourceDiscoveryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.operatingRegions">operatingRegions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions">VpcIpamResourceDiscoveryOperatingRegions</a>></code> | operating_regions block. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#description VpcIpamResourceDiscovery#description}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#id VpcIpamResourceDiscovery#id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.organizationalUnitExclusion">organizationalUnitExclusion</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion">VpcIpamResourceDiscoveryOrganizationalUnitExclusion</a>></code> | organizational_unit_exclusion block. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#tags VpcIpamResourceDiscovery#tags}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#tags_all VpcIpamResourceDiscovery#tags_all}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `operatingRegions`<sup>Required</sup> <a name="operatingRegions" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.operatingRegions"></a>

```java
public IResolvable|java.util.List<VpcIpamResourceDiscoveryOperatingRegions> getOperatingRegions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions">VpcIpamResourceDiscoveryOperatingRegions</a>>

operating_regions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#operating_regions VpcIpamResourceDiscovery#operating_regions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#description VpcIpamResourceDiscovery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#id VpcIpamResourceDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationalUnitExclusion`<sup>Optional</sup> <a name="organizationalUnitExclusion" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.organizationalUnitExclusion"></a>

```java
public IResolvable|java.util.List<VpcIpamResourceDiscoveryOrganizationalUnitExclusion> getOrganizationalUnitExclusion();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion">VpcIpamResourceDiscoveryOrganizationalUnitExclusion</a>>

organizational_unit_exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#organizational_unit_exclusion VpcIpamResourceDiscovery#organizational_unit_exclusion}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#region VpcIpamResourceDiscovery#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#tags VpcIpamResourceDiscovery#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#tags_all VpcIpamResourceDiscovery#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.timeouts"></a>

```java
public VpcIpamResourceDiscoveryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#timeouts VpcIpamResourceDiscovery#timeouts}

---

### VpcIpamResourceDiscoveryOperatingRegions <a name="VpcIpamResourceDiscoveryOperatingRegions" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscoveryOperatingRegions;

VpcIpamResourceDiscoveryOperatingRegions.builder()
    .regionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions.property.regionName">regionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#region_name VpcIpamResourceDiscovery#region_name}. |

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#region_name VpcIpamResourceDiscovery#region_name}.

---

### VpcIpamResourceDiscoveryOrganizationalUnitExclusion <a name="VpcIpamResourceDiscoveryOrganizationalUnitExclusion" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion;

VpcIpamResourceDiscoveryOrganizationalUnitExclusion.builder()
    .organizationsEntityPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion.property.organizationsEntityPath">organizationsEntityPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#organizations_entity_path VpcIpamResourceDiscovery#organizations_entity_path}. |

---

##### `organizationsEntityPath`<sup>Required</sup> <a name="organizationsEntityPath" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion.property.organizationsEntityPath"></a>

```java
public java.lang.String getOrganizationsEntityPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#organizations_entity_path VpcIpamResourceDiscovery#organizations_entity_path}.

---

### VpcIpamResourceDiscoveryTimeouts <a name="VpcIpamResourceDiscoveryTimeouts" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscoveryTimeouts;

VpcIpamResourceDiscoveryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#create VpcIpamResourceDiscovery#create}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#delete VpcIpamResourceDiscovery#delete}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#update VpcIpamResourceDiscovery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#create VpcIpamResourceDiscovery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#delete VpcIpamResourceDiscovery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/vpc_ipam_resource_discovery#update VpcIpamResourceDiscovery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamResourceDiscoveryOperatingRegionsList <a name="VpcIpamResourceDiscoveryOperatingRegionsList" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscoveryOperatingRegionsList;

new VpcIpamResourceDiscoveryOperatingRegionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.get"></a>

```java
public VpcIpamResourceDiscoveryOperatingRegionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions">VpcIpamResourceDiscoveryOperatingRegions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VpcIpamResourceDiscoveryOperatingRegions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions">VpcIpamResourceDiscoveryOperatingRegions</a>>

---


### VpcIpamResourceDiscoveryOperatingRegionsOutputReference <a name="VpcIpamResourceDiscoveryOperatingRegionsOutputReference" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference;

new VpcIpamResourceDiscoveryOperatingRegionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions">VpcIpamResourceDiscoveryOperatingRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.regionNameInput"></a>

```java
public java.lang.String getRegionNameInput();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue"></a>

```java
public IResolvable|VpcIpamResourceDiscoveryOperatingRegions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions">VpcIpamResourceDiscoveryOperatingRegions</a>

---


### VpcIpamResourceDiscoveryOrganizationalUnitExclusionList <a name="VpcIpamResourceDiscoveryOrganizationalUnitExclusionList" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList;

new VpcIpamResourceDiscoveryOrganizationalUnitExclusionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.get"></a>

```java
public VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion">VpcIpamResourceDiscoveryOrganizationalUnitExclusion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VpcIpamResourceDiscoveryOrganizationalUnitExclusion> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion">VpcIpamResourceDiscoveryOrganizationalUnitExclusion</a>>

---


### VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference <a name="VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference;

new VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.property.organizationsEntityPathInput">organizationsEntityPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.property.organizationsEntityPath">organizationsEntityPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion">VpcIpamResourceDiscoveryOrganizationalUnitExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `organizationsEntityPathInput`<sup>Optional</sup> <a name="organizationsEntityPathInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.property.organizationsEntityPathInput"></a>

```java
public java.lang.String getOrganizationsEntityPathInput();
```

- *Type:* java.lang.String

---

##### `organizationsEntityPath`<sup>Required</sup> <a name="organizationsEntityPath" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.property.organizationsEntityPath"></a>

```java
public java.lang.String getOrganizationsEntityPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusionOutputReference.property.internalValue"></a>

```java
public IResolvable|VpcIpamResourceDiscoveryOrganizationalUnitExclusion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOrganizationalUnitExclusion">VpcIpamResourceDiscoveryOrganizationalUnitExclusion</a>

---


### VpcIpamResourceDiscoveryTimeoutsOutputReference <a name="VpcIpamResourceDiscoveryTimeoutsOutputReference" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_ipam_resource_discovery.VpcIpamResourceDiscoveryTimeoutsOutputReference;

new VpcIpamResourceDiscoveryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VpcIpamResourceDiscoveryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a>

---



