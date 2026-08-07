# `route53ProfilesProfile` Submodule <a name="`route53ProfilesProfile` Submodule" id="@cdktn/provider-aws.route53ProfilesProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ProfilesProfile <a name="Route53ProfilesProfile" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile aws_route53profiles_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer"></a>

```java
import io.cdktn.providers.aws.route53_profiles_profile.Route53ProfilesProfile;

Route53ProfilesProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Route53ProfilesProfileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#name Route53ProfilesProfile#name}. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#tags Route53ProfilesProfile#tags}. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts">Route53ProfilesProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#name Route53ProfilesProfile#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#region Route53ProfilesProfile#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#tags Route53ProfilesProfile#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts">Route53ProfilesProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#timeouts Route53ProfilesProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.putTimeouts"></a>

```java
public void putTimeouts(Route53ProfilesProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts">Route53ProfilesProfileTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ProfilesProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.isConstruct"></a>

```java
import io.cdktn.providers.aws.route53_profiles_profile.Route53ProfilesProfile;

Route53ProfilesProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.route53_profiles_profile.Route53ProfilesProfile;

Route53ProfilesProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.route53_profiles_profile.Route53ProfilesProfile;

Route53ProfilesProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.route53_profiles_profile.Route53ProfilesProfile;

Route53ProfilesProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53ProfilesProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53ProfilesProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53ProfilesProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53ProfilesProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53ProfilesProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.shareStatus">shareStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference">Route53ProfilesProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts">Route53ProfilesProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.shareStatus"></a>

```java
public java.lang.String getShareStatus();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.timeouts"></a>

```java
public Route53ProfilesProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference">Route53ProfilesProfileTimeoutsOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.timeoutsInput"></a>

```java
public IResolvable|Route53ProfilesProfileTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts">Route53ProfilesProfileTimeouts</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ProfilesProfileConfig <a name="Route53ProfilesProfileConfig" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.route53_profiles_profile.Route53ProfilesProfileConfig;

Route53ProfilesProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Route53ProfilesProfileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#name Route53ProfilesProfile#name}. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#tags Route53ProfilesProfile#tags}. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts">Route53ProfilesProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#name Route53ProfilesProfile#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#region Route53ProfilesProfile#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#tags Route53ProfilesProfile#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileConfig.property.timeouts"></a>

```java
public Route53ProfilesProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts">Route53ProfilesProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#timeouts Route53ProfilesProfile#timeouts}

---

### Route53ProfilesProfileTimeouts <a name="Route53ProfilesProfileTimeouts" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.route53_profiles_profile.Route53ProfilesProfileTimeouts;

Route53ProfilesProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#create Route53ProfilesProfile#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#delete Route53ProfilesProfile#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53profiles_profile#read Route53ProfilesProfile#read}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ProfilesProfileTimeoutsOutputReference <a name="Route53ProfilesProfileTimeoutsOutputReference" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.route53_profiles_profile.Route53ProfilesProfileTimeoutsOutputReference;

new Route53ProfilesProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts">Route53ProfilesProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53ProfilesProfileTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.route53ProfilesProfile.Route53ProfilesProfileTimeouts">Route53ProfilesProfileTimeouts</a>

---



