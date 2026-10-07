# `directoryServiceIpRoutesExclusive` Submodule <a name="`directoryServiceIpRoutesExclusive` Submodule" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceIpRoutesExclusive <a name="DirectoryServiceIpRoutesExclusive" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive aws_directory_service_ip_routes_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_ip_routes_exclusive.DirectoryServiceIpRoutesExclusive;

DirectoryServiceIpRoutesExclusive.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directoryId(java.lang.String)
//  .ipRoute(IResolvable|java.util.List<DirectoryServiceIpRoutesExclusiveIpRoute>)
//  .region(java.lang.String)
//  .timeouts(DirectoryServiceIpRoutesExclusiveTimeouts)
//  .updateSecurityGroupForDirectoryControllers(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.ipRoute">ipRoute</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>></code> | ip_route block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.updateSecurityGroupForDirectoryControllers">updateSecurityGroupForDirectoryControllers</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}.

---

##### `ipRoute`<sup>Optional</sup> <a name="ipRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.ipRoute"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>>

ip_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#ip_route DirectoryServiceIpRoutesExclusive#ip_route}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#region DirectoryServiceIpRoutesExclusive#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#timeouts DirectoryServiceIpRoutesExclusive#timeouts}

---

##### `updateSecurityGroupForDirectoryControllers`<sup>Optional</sup> <a name="updateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.updateSecurityGroupForDirectoryControllers"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute">putIpRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetIpRoute">resetIpRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetUpdateSecurityGroupForDirectoryControllers">resetUpdateSecurityGroupForDirectoryControllers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpRoute` <a name="putIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute"></a>

```java
public void putIpRoute(IResolvable|java.util.List<DirectoryServiceIpRoutesExclusiveIpRoute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts"></a>

```java
public void putTimeouts(DirectoryServiceIpRoutesExclusiveTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---

##### `resetIpRoute` <a name="resetIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetIpRoute"></a>

```java
public void resetIpRoute()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpdateSecurityGroupForDirectoryControllers` <a name="resetUpdateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetUpdateSecurityGroupForDirectoryControllers"></a>

```java
public void resetUpdateSecurityGroupForDirectoryControllers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryServiceIpRoutesExclusive resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct"></a>

```java
import io.cdktn.providers.aws.directory_service_ip_routes_exclusive.DirectoryServiceIpRoutesExclusive;

DirectoryServiceIpRoutesExclusive.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.directory_service_ip_routes_exclusive.DirectoryServiceIpRoutesExclusive;

DirectoryServiceIpRoutesExclusive.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.directory_service_ip_routes_exclusive.DirectoryServiceIpRoutesExclusive;

DirectoryServiceIpRoutesExclusive.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.directory_service_ip_routes_exclusive.DirectoryServiceIpRoutesExclusive;

DirectoryServiceIpRoutesExclusive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectoryServiceIpRoutesExclusive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DirectoryServiceIpRoutesExclusive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectoryServiceIpRoutesExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectoryServiceIpRoutesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryServiceIpRoutesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRoute">ipRoute</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList">DirectoryServiceIpRoutesExclusiveIpRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference">DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRouteInput">ipRouteInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllersInput">updateSecurityGroupForDirectoryControllersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllers">updateSecurityGroupForDirectoryControllers</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipRoute`<sup>Required</sup> <a name="ipRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRoute"></a>

```java
public DirectoryServiceIpRoutesExclusiveIpRouteList getIpRoute();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList">DirectoryServiceIpRoutesExclusiveIpRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeouts"></a>

```java
public DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference">DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference</a>

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `ipRouteInput`<sup>Optional</sup> <a name="ipRouteInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRouteInput"></a>

```java
public IResolvable|java.util.List<DirectoryServiceIpRoutesExclusiveIpRoute> getIpRouteInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeoutsInput"></a>

```java
public IResolvable|DirectoryServiceIpRoutesExclusiveTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---

##### `updateSecurityGroupForDirectoryControllersInput`<sup>Optional</sup> <a name="updateSecurityGroupForDirectoryControllersInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllersInput"></a>

```java
public java.lang.Boolean|IResolvable getUpdateSecurityGroupForDirectoryControllersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `updateSecurityGroupForDirectoryControllers`<sup>Required</sup> <a name="updateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllers"></a>

```java
public java.lang.Boolean|IResolvable getUpdateSecurityGroupForDirectoryControllers();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceIpRoutesExclusiveConfig <a name="DirectoryServiceIpRoutesExclusiveConfig" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_ip_routes_exclusive.DirectoryServiceIpRoutesExclusiveConfig;

DirectoryServiceIpRoutesExclusiveConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directoryId(java.lang.String)
//  .ipRoute(IResolvable|java.util.List<DirectoryServiceIpRoutesExclusiveIpRoute>)
//  .region(java.lang.String)
//  .timeouts(DirectoryServiceIpRoutesExclusiveTimeouts)
//  .updateSecurityGroupForDirectoryControllers(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.ipRoute">ipRoute</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>></code> | ip_route block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.updateSecurityGroupForDirectoryControllers">updateSecurityGroupForDirectoryControllers</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}.

---

##### `ipRoute`<sup>Optional</sup> <a name="ipRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.ipRoute"></a>

```java
public IResolvable|java.util.List<DirectoryServiceIpRoutesExclusiveIpRoute> getIpRoute();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>>

ip_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#ip_route DirectoryServiceIpRoutesExclusive#ip_route}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#region DirectoryServiceIpRoutesExclusive#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.timeouts"></a>

```java
public DirectoryServiceIpRoutesExclusiveTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#timeouts DirectoryServiceIpRoutesExclusive#timeouts}

---

##### `updateSecurityGroupForDirectoryControllers`<sup>Optional</sup> <a name="updateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.updateSecurityGroupForDirectoryControllers"></a>

```java
public java.lang.Boolean|IResolvable getUpdateSecurityGroupForDirectoryControllers();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}.

---

### DirectoryServiceIpRoutesExclusiveIpRoute <a name="DirectoryServiceIpRoutesExclusiveIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_ip_routes_exclusive.DirectoryServiceIpRoutesExclusiveIpRoute;

DirectoryServiceIpRoutesExclusiveIpRoute.builder()
//  .cidrIp(java.lang.String)
//  .cidrIpv6(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ip DirectoryServiceIpRoutesExclusive#cidr_ip}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ipv6 DirectoryServiceIpRoutesExclusive#cidr_ipv6}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#description DirectoryServiceIpRoutesExclusive#description}. |

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIp"></a>

```java
public java.lang.String getCidrIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ip DirectoryServiceIpRoutesExclusive#cidr_ip}.

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIpv6"></a>

```java
public java.lang.String getCidrIpv6();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ipv6 DirectoryServiceIpRoutesExclusive#cidr_ipv6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#description DirectoryServiceIpRoutesExclusive#description}.

---

### DirectoryServiceIpRoutesExclusiveTimeouts <a name="DirectoryServiceIpRoutesExclusiveTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_ip_routes_exclusive.DirectoryServiceIpRoutesExclusiveTimeouts;

DirectoryServiceIpRoutesExclusiveTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#create DirectoryServiceIpRoutesExclusive#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update DirectoryServiceIpRoutesExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceIpRoutesExclusiveIpRouteList <a name="DirectoryServiceIpRoutesExclusiveIpRouteList" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_ip_routes_exclusive.DirectoryServiceIpRoutesExclusiveIpRouteList;

new DirectoryServiceIpRoutesExclusiveIpRouteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get"></a>

```java
public DirectoryServiceIpRoutesExclusiveIpRouteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DirectoryServiceIpRoutesExclusiveIpRoute> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>>

---


### DirectoryServiceIpRoutesExclusiveIpRouteOutputReference <a name="DirectoryServiceIpRoutesExclusiveIpRouteOutputReference" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_ip_routes_exclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference;

new DirectoryServiceIpRoutesExclusiveIpRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIp">resetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrIp` <a name="resetCidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIp"></a>

```java
public void resetCidrIp()
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIpv6"></a>

```java
public void resetCidrIpv6()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpInput">cidrIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrIpInput`<sup>Optional</sup> <a name="cidrIpInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpInput"></a>

```java
public java.lang.String getCidrIpInput();
```

- *Type:* java.lang.String

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6Input"></a>

```java
public java.lang.String getCidrIpv6Input();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `cidrIp`<sup>Required</sup> <a name="cidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIp"></a>

```java
public java.lang.String getCidrIp();
```

- *Type:* java.lang.String

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6"></a>

```java
public java.lang.String getCidrIpv6();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectoryServiceIpRoutesExclusiveIpRoute getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>

---


### DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference <a name="DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_ip_routes_exclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference;

new DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectoryServiceIpRoutesExclusiveTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---



