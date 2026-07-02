# `defaultVpcDhcpOptions` Submodule <a name="`defaultVpcDhcpOptions` Submodule" id="@cdktn/provider-aws.defaultVpcDhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultVpcDhcpOptions <a name="DefaultVpcDhcpOptions" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options aws_default_vpc_dhcp_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.default_vpc_dhcp_options.DefaultVpcDhcpOptions;

DefaultVpcDhcpOptions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .ownerId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.ownerId">ownerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.ownerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#region DefaultVpcDhcpOptions#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOwnerId">resetOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetId"></a>

```java
public void resetId()
```

##### `resetOwnerId` <a name="resetOwnerId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOwnerId"></a>

```java
public void resetOwnerId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DefaultVpcDhcpOptions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct"></a>

```java
import io.cdktn.providers.aws.default_vpc_dhcp_options.DefaultVpcDhcpOptions;

DefaultVpcDhcpOptions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.default_vpc_dhcp_options.DefaultVpcDhcpOptions;

DefaultVpcDhcpOptions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.default_vpc_dhcp_options.DefaultVpcDhcpOptions;

DefaultVpcDhcpOptions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.default_vpc_dhcp_options.DefaultVpcDhcpOptions;

DefaultVpcDhcpOptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DefaultVpcDhcpOptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DefaultVpcDhcpOptions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DefaultVpcDhcpOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DefaultVpcDhcpOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DefaultVpcDhcpOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainNameServers">domainNameServers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ipv6AddressPreferredLeaseTime">ipv6AddressPreferredLeaseTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNameServers">netbiosNameServers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNodeType">netbiosNodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ntpServers">ntpServers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerIdInput">ownerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `domainNameServers`<sup>Required</sup> <a name="domainNameServers" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainNameServers"></a>

```java
public java.lang.String getDomainNameServers();
```

- *Type:* java.lang.String

---

##### `ipv6AddressPreferredLeaseTime`<sup>Required</sup> <a name="ipv6AddressPreferredLeaseTime" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ipv6AddressPreferredLeaseTime"></a>

```java
public java.lang.String getIpv6AddressPreferredLeaseTime();
```

- *Type:* java.lang.String

---

##### `netbiosNameServers`<sup>Required</sup> <a name="netbiosNameServers" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNameServers"></a>

```java
public java.lang.String getNetbiosNameServers();
```

- *Type:* java.lang.String

---

##### `netbiosNodeType`<sup>Required</sup> <a name="netbiosNodeType" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNodeType"></a>

```java
public java.lang.String getNetbiosNodeType();
```

- *Type:* java.lang.String

---

##### `ntpServers`<sup>Required</sup> <a name="ntpServers" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ntpServers"></a>

```java
public java.lang.String getNtpServers();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerIdInput"></a>

```java
public java.lang.String getOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultVpcDhcpOptionsConfig <a name="DefaultVpcDhcpOptionsConfig" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.default_vpc_dhcp_options.DefaultVpcDhcpOptionsConfig;

DefaultVpcDhcpOptionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .ownerId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#region DefaultVpcDhcpOptions#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}.

---



