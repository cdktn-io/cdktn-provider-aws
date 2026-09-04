# `ec2NetworkInsightsAccessScope` Submodule <a name="`ec2NetworkInsightsAccessScope` Submodule" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInsightsAccessScope <a name="Ec2NetworkInsightsAccessScope" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope aws_ec2_network_insights_access_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScope;

Ec2NetworkInsightsAccessScope.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .excludePaths(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePaths>)
//  .matchPaths(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPaths>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.excludePaths">excludePaths</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>></code> | exclude_paths block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.matchPaths">matchPaths</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>></code> | match_paths block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#tags Ec2NetworkInsightsAccessScope#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `excludePaths`<sup>Optional</sup> <a name="excludePaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.excludePaths"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>>

exclude_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#exclude_paths Ec2NetworkInsightsAccessScope#exclude_paths}

---

##### `matchPaths`<sup>Optional</sup> <a name="matchPaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.matchPaths"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>>

match_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#match_paths Ec2NetworkInsightsAccessScope#match_paths}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#region Ec2NetworkInsightsAccessScope#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#tags Ec2NetworkInsightsAccessScope#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putExcludePaths">putExcludePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putMatchPaths">putMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetExcludePaths">resetExcludePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetMatchPaths">resetMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExcludePaths` <a name="putExcludePaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putExcludePaths"></a>

```java
public void putExcludePaths(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePaths> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putExcludePaths.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>>

---

##### `putMatchPaths` <a name="putMatchPaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putMatchPaths"></a>

```java
public void putMatchPaths(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPaths> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putMatchPaths.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>>

---

##### `resetExcludePaths` <a name="resetExcludePaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetExcludePaths"></a>

```java
public void resetExcludePaths()
```

##### `resetMatchPaths` <a name="resetMatchPaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetMatchPaths"></a>

```java
public void resetMatchPaths()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isConstruct"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScope;

Ec2NetworkInsightsAccessScope.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScope;

Ec2NetworkInsightsAccessScope.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScope;

Ec2NetworkInsightsAccessScope.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScope;

Ec2NetworkInsightsAccessScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2NetworkInsightsAccessScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2NetworkInsightsAccessScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2NetworkInsightsAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInsightsAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePaths">excludePaths</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList">Ec2NetworkInsightsAccessScopeExcludePathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPaths">matchPaths</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList">Ec2NetworkInsightsAccessScopeMatchPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePathsInput">excludePathsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPathsInput">matchPathsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `excludePaths`<sup>Required</sup> <a name="excludePaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePaths"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsList getExcludePaths();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList">Ec2NetworkInsightsAccessScopeExcludePathsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `matchPaths`<sup>Required</sup> <a name="matchPaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPaths"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsList getMatchPaths();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList">Ec2NetworkInsightsAccessScopeMatchPathsList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `excludePathsInput`<sup>Optional</sup> <a name="excludePathsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePathsInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePaths> getExcludePathsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>>

---

##### `matchPathsInput`<sup>Optional</sup> <a name="matchPathsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPathsInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPaths> getMatchPathsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInsightsAccessScopeConfig <a name="Ec2NetworkInsightsAccessScopeConfig" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeConfig;

Ec2NetworkInsightsAccessScopeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .excludePaths(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePaths>)
//  .matchPaths(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPaths>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.excludePaths">excludePaths</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>></code> | exclude_paths block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.matchPaths">matchPaths</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>></code> | match_paths block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#tags Ec2NetworkInsightsAccessScope#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `excludePaths`<sup>Optional</sup> <a name="excludePaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.excludePaths"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePaths> getExcludePaths();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>>

exclude_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#exclude_paths Ec2NetworkInsightsAccessScope#exclude_paths}

---

##### `matchPaths`<sup>Optional</sup> <a name="matchPaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.matchPaths"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPaths> getMatchPaths();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>>

match_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#match_paths Ec2NetworkInsightsAccessScope#match_paths}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#region Ec2NetworkInsightsAccessScope#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#tags Ec2NetworkInsightsAccessScope#tags}.

---

### Ec2NetworkInsightsAccessScopeExcludePaths <a name="Ec2NetworkInsightsAccessScopeExcludePaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePaths;

Ec2NetworkInsightsAccessScopeExcludePaths.builder()
//  .destination(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestination>)
//  .source(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSource>)
//  .throughResources(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsThroughResources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.destination">destination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>></code> | destination block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.source">source</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>></code> | source block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.throughResources">throughResources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>></code> | through_resources block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.destination"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestination> getDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.source"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSource> getSource();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}

---

##### `throughResources`<sup>Optional</sup> <a name="throughResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.throughResources"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsThroughResources> getThroughResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>>

through_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#through_resources Ec2NetworkInsightsAccessScope#through_resources}

---

### Ec2NetworkInsightsAccessScopeExcludePathsDestination <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsDestination;

Ec2NetworkInsightsAccessScopeExcludePathsDestination.builder()
//  .packetHeaderStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement>)
//  .resourceStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>></code> | packet_header_statement block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.resourceStatement">resourceStatement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>></code> | resource_statement block. |

---

##### `packetHeaderStatement`<sup>Optional</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.packetHeaderStatement"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement> getPacketHeaderStatement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>>

packet_header_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}

---

##### `resourceStatement`<sup>Optional</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.resourceStatement"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement> getResourceStatement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>>

resource_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}

---

### Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement;

Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.builder()
//  .destinationAddresses(java.util.List<java.lang.String>)
//  .destinationPorts(java.util.List<java.lang.String>)
//  .destinationPrefixLists(java.util.List<java.lang.String>)
//  .protocols(java.util.List<java.lang.String>)
//  .sourceAddresses(java.util.List<java.lang.String>)
//  .sourcePorts(java.util.List<java.lang.String>)
//  .sourcePrefixLists(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePorts">sourcePorts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `destinationPrefixLists`<sup>Optional</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPrefixLists"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixLists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `sourcePorts`<sup>Optional</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePorts"></a>

```java
public java.util.List<java.lang.String> getSourcePorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `sourcePrefixLists`<sup>Optional</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePrefixLists"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixLists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement;

Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.builder()
//  .resources(java.util.List<java.lang.String>)
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsSource <a name="Ec2NetworkInsightsAccessScopeExcludePathsSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsSource;

Ec2NetworkInsightsAccessScopeExcludePathsSource.builder()
//  .packetHeaderStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement>)
//  .resourceStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>></code> | packet_header_statement block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.resourceStatement">resourceStatement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>></code> | resource_statement block. |

---

##### `packetHeaderStatement`<sup>Optional</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.packetHeaderStatement"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement> getPacketHeaderStatement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>>

packet_header_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}

---

##### `resourceStatement`<sup>Optional</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.resourceStatement"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement> getResourceStatement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>>

resource_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}

---

### Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement;

Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.builder()
//  .destinationAddresses(java.util.List<java.lang.String>)
//  .destinationPorts(java.util.List<java.lang.String>)
//  .destinationPrefixLists(java.util.List<java.lang.String>)
//  .protocols(java.util.List<java.lang.String>)
//  .sourceAddresses(java.util.List<java.lang.String>)
//  .sourcePorts(java.util.List<java.lang.String>)
//  .sourcePrefixLists(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePorts">sourcePorts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `destinationPrefixLists`<sup>Optional</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPrefixLists"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixLists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `sourcePorts`<sup>Optional</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePorts"></a>

```java
public java.util.List<java.lang.String> getSourcePorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `sourcePrefixLists`<sup>Optional</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePrefixLists"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixLists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement;

Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.builder()
//  .resources(java.util.List<java.lang.String>)
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsThroughResources <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources;

Ec2NetworkInsightsAccessScopeExcludePathsThroughResources.builder()
//  .resourceStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources.property.resourceStatement">resourceStatement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>></code> | resource_statement block. |

---

##### `resourceStatement`<sup>Optional</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources.property.resourceStatement"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement> getResourceStatement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>>

resource_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}

---

### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement;

Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.builder()
//  .resources(java.util.List<java.lang.String>)
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeMatchPaths <a name="Ec2NetworkInsightsAccessScopeMatchPaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPaths;

Ec2NetworkInsightsAccessScopeMatchPaths.builder()
//  .destination(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestination>)
//  .source(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSource>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.destination">destination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>></code> | destination block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.source">source</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>></code> | source block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.destination"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestination> getDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.source"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSource> getSource();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}

---

### Ec2NetworkInsightsAccessScopeMatchPathsDestination <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsDestination;

Ec2NetworkInsightsAccessScopeMatchPathsDestination.builder()
//  .packetHeaderStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement>)
//  .resourceStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>></code> | packet_header_statement block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.resourceStatement">resourceStatement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>></code> | resource_statement block. |

---

##### `packetHeaderStatement`<sup>Optional</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.packetHeaderStatement"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement> getPacketHeaderStatement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>>

packet_header_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}

---

##### `resourceStatement`<sup>Optional</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.resourceStatement"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement> getResourceStatement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>>

resource_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}

---

### Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement;

Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.builder()
//  .destinationAddresses(java.util.List<java.lang.String>)
//  .destinationPorts(java.util.List<java.lang.String>)
//  .destinationPrefixLists(java.util.List<java.lang.String>)
//  .protocols(java.util.List<java.lang.String>)
//  .sourceAddresses(java.util.List<java.lang.String>)
//  .sourcePorts(java.util.List<java.lang.String>)
//  .sourcePrefixLists(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePorts">sourcePorts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `destinationPrefixLists`<sup>Optional</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPrefixLists"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixLists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `sourcePorts`<sup>Optional</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePorts"></a>

```java
public java.util.List<java.lang.String> getSourcePorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `sourcePrefixLists`<sup>Optional</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePrefixLists"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixLists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement;

Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.builder()
//  .resources(java.util.List<java.lang.String>)
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsSource <a name="Ec2NetworkInsightsAccessScopeMatchPathsSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsSource;

Ec2NetworkInsightsAccessScopeMatchPathsSource.builder()
//  .packetHeaderStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement>)
//  .resourceStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>></code> | packet_header_statement block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.resourceStatement">resourceStatement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>></code> | resource_statement block. |

---

##### `packetHeaderStatement`<sup>Optional</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.packetHeaderStatement"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement> getPacketHeaderStatement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>>

packet_header_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}

---

##### `resourceStatement`<sup>Optional</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.resourceStatement"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement> getResourceStatement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>>

resource_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}

---

### Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement;

Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.builder()
//  .destinationAddresses(java.util.List<java.lang.String>)
//  .destinationPorts(java.util.List<java.lang.String>)
//  .destinationPrefixLists(java.util.List<java.lang.String>)
//  .protocols(java.util.List<java.lang.String>)
//  .sourceAddresses(java.util.List<java.lang.String>)
//  .sourcePorts(java.util.List<java.lang.String>)
//  .sourcePrefixLists(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePorts">sourcePorts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `destinationPrefixLists`<sup>Optional</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPrefixLists"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixLists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `sourcePorts`<sup>Optional</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePorts"></a>

```java
public java.util.List<java.lang.String> getSourcePorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `sourcePrefixLists`<sup>Optional</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePrefixLists"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixLists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement;

Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.builder()
//  .resources(java.util.List<java.lang.String>)
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInsightsAccessScopeExcludePathsDestinationList <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList;

new Ec2NetworkInsightsAccessScopeExcludePathsDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>>

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference;

new Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putPacketHeaderStatement">putPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putResourceStatement">putResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetPacketHeaderStatement">resetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetResourceStatement">resetResourceStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPacketHeaderStatement` <a name="putPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putPacketHeaderStatement"></a>

```java
public void putPacketHeaderStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>>

---

##### `putResourceStatement` <a name="putResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putResourceStatement"></a>

```java
public void putResourceStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>>

---

##### `resetPacketHeaderStatement` <a name="resetPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetPacketHeaderStatement"></a>

```java
public void resetPacketHeaderStatement()
```

##### `resetResourceStatement` <a name="resetResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetResourceStatement"></a>

```java
public void resetResourceStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatementInput">packetHeaderStatementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatementInput">resourceStatementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatement"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList getPacketHeaderStatement();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatement"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList getResourceStatement();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList</a>

---

##### `packetHeaderStatementInput`<sup>Optional</sup> <a name="packetHeaderStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatementInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement> getPacketHeaderStatementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>>

---

##### `resourceStatementInput`<sup>Optional</sup> <a name="resourceStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatementInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement> getResourceStatementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeExcludePathsDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList;

new Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>>

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference;

new Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts">resetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists">resetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts">resetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists">resetSourcePrefixLists</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```java
public void resetDestinationAddresses()
```

##### `resetDestinationPorts` <a name="resetDestinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```java
public void resetDestinationPorts()
```

##### `resetDestinationPrefixLists` <a name="resetDestinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```java
public void resetDestinationPrefixLists()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```java
public void resetSourceAddresses()
```

##### `resetSourcePorts` <a name="resetSourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts"></a>

```java
public void resetSourcePorts()
```

##### `resetSourcePrefixLists` <a name="resetSourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```java
public void resetSourcePrefixLists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput">destinationPrefixListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput">sourcePortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput">sourcePrefixListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```java
public java.util.List<java.lang.String> getDestinationAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPrefixListsInput`<sup>Optional</sup> <a name="destinationPrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```java
public java.util.List<java.lang.String> getSourceAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePortsInput`<sup>Optional</sup> <a name="sourcePortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```java
public java.util.List<java.lang.String> getSourcePortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePrefixListsInput`<sup>Optional</sup> <a name="sourcePrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts"></a>

```java
public java.util.List<java.lang.String> getSourcePorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList;

new Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>>

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference;

new Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResources` <a name="resetResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsList <a name="Ec2NetworkInsightsAccessScopeExcludePathsList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsList;

new Ec2NetworkInsightsAccessScopeExcludePathsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePaths> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>>

---


### Ec2NetworkInsightsAccessScopeExcludePathsOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference;

new Ec2NetworkInsightsAccessScopeExcludePathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putThroughResources">putThroughResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetThroughResources">resetThroughResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putDestination"></a>

```java
public void putDestination(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putSource"></a>

```java
public void putSource(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putSource.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>>

---

##### `putThroughResources` <a name="putThroughResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putThroughResources"></a>

```java
public void putThroughResources(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsThroughResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putThroughResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetThroughResources` <a name="resetThroughResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetThroughResources"></a>

```java
public void resetThroughResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList">Ec2NetworkInsightsAccessScopeExcludePathsSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResources">throughResources</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destinationInput">destinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.sourceInput">sourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResourcesInput">throughResourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destination"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsDestinationList getDestination();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.source"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsSourceList getSource();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList">Ec2NetworkInsightsAccessScopeExcludePathsSourceList</a>

---

##### `throughResources`<sup>Required</sup> <a name="throughResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResources"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList getThroughResources();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destinationInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsDestination> getDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.sourceInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSource> getSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>>

---

##### `throughResourcesInput`<sup>Optional</sup> <a name="throughResourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResourcesInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsThroughResources> getThroughResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeExcludePaths getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourceList <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList;

new Ec2NetworkInsightsAccessScopeExcludePathsSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSource> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>>

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference;

new Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putPacketHeaderStatement">putPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putResourceStatement">putResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetPacketHeaderStatement">resetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetResourceStatement">resetResourceStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPacketHeaderStatement` <a name="putPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putPacketHeaderStatement"></a>

```java
public void putPacketHeaderStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>>

---

##### `putResourceStatement` <a name="putResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putResourceStatement"></a>

```java
public void putResourceStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>>

---

##### `resetPacketHeaderStatement` <a name="resetPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetPacketHeaderStatement"></a>

```java
public void resetPacketHeaderStatement()
```

##### `resetResourceStatement` <a name="resetResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetResourceStatement"></a>

```java
public void resetResourceStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatementInput">packetHeaderStatementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatementInput">resourceStatementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatement"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList getPacketHeaderStatement();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatement"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList getResourceStatement();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList</a>

---

##### `packetHeaderStatementInput`<sup>Optional</sup> <a name="packetHeaderStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatementInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement> getPacketHeaderStatementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>>

---

##### `resourceStatementInput`<sup>Optional</sup> <a name="resourceStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatementInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement> getResourceStatementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeExcludePathsSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList;

new Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>>

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference;

new Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts">resetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists">resetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePorts">resetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists">resetSourcePrefixLists</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```java
public void resetDestinationAddresses()
```

##### `resetDestinationPorts` <a name="resetDestinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```java
public void resetDestinationPorts()
```

##### `resetDestinationPrefixLists` <a name="resetDestinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```java
public void resetDestinationPrefixLists()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```java
public void resetSourceAddresses()
```

##### `resetSourcePorts` <a name="resetSourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePorts"></a>

```java
public void resetSourcePorts()
```

##### `resetSourcePrefixLists` <a name="resetSourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```java
public void resetSourcePrefixLists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput">destinationPrefixListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput">sourcePortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput">sourcePrefixListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```java
public java.util.List<java.lang.String> getDestinationAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPrefixListsInput`<sup>Optional</sup> <a name="destinationPrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```java
public java.util.List<java.lang.String> getSourceAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePortsInput`<sup>Optional</sup> <a name="sourcePortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```java
public java.util.List<java.lang.String> getSourcePortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePrefixListsInput`<sup>Optional</sup> <a name="sourcePrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePorts"></a>

```java
public java.util.List<java.lang.String> getSourcePorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList;

new Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>>

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference;

new Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResources` <a name="resetResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList;

new Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsThroughResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>>

---


### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference;

new Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.putResourceStatement">putResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resetResourceStatement">resetResourceStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceStatement` <a name="putResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.putResourceStatement"></a>

```java
public void putResourceStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>>

---

##### `resetResourceStatement` <a name="resetResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resetResourceStatement"></a>

```java
public void resetResourceStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatementInput">resourceStatementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatement"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList getResourceStatement();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList</a>

---

##### `resourceStatementInput`<sup>Optional</sup> <a name="resourceStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatementInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement> getResourceStatementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeExcludePathsThroughResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList;

new Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>>

---


### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference;

new Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResources` <a name="resetResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationList <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList;

new Ec2NetworkInsightsAccessScopeMatchPathsDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>>

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference;

new Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putPacketHeaderStatement">putPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putResourceStatement">putResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetPacketHeaderStatement">resetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetResourceStatement">resetResourceStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPacketHeaderStatement` <a name="putPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putPacketHeaderStatement"></a>

```java
public void putPacketHeaderStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>>

---

##### `putResourceStatement` <a name="putResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putResourceStatement"></a>

```java
public void putResourceStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>>

---

##### `resetPacketHeaderStatement` <a name="resetPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetPacketHeaderStatement"></a>

```java
public void resetPacketHeaderStatement()
```

##### `resetResourceStatement` <a name="resetResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetResourceStatement"></a>

```java
public void resetResourceStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatementInput">packetHeaderStatementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatementInput">resourceStatementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatement"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList getPacketHeaderStatement();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatement"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList getResourceStatement();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList</a>

---

##### `packetHeaderStatementInput`<sup>Optional</sup> <a name="packetHeaderStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatementInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement> getPacketHeaderStatementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>>

---

##### `resourceStatementInput`<sup>Optional</sup> <a name="resourceStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatementInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement> getResourceStatementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeMatchPathsDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList;

new Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>>

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference;

new Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts">resetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists">resetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts">resetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists">resetSourcePrefixLists</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```java
public void resetDestinationAddresses()
```

##### `resetDestinationPorts` <a name="resetDestinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```java
public void resetDestinationPorts()
```

##### `resetDestinationPrefixLists` <a name="resetDestinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```java
public void resetDestinationPrefixLists()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```java
public void resetSourceAddresses()
```

##### `resetSourcePorts` <a name="resetSourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts"></a>

```java
public void resetSourcePorts()
```

##### `resetSourcePrefixLists` <a name="resetSourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```java
public void resetSourcePrefixLists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput">destinationPrefixListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput">sourcePortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput">sourcePrefixListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```java
public java.util.List<java.lang.String> getDestinationAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPrefixListsInput`<sup>Optional</sup> <a name="destinationPrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```java
public java.util.List<java.lang.String> getSourceAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePortsInput`<sup>Optional</sup> <a name="sourcePortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```java
public java.util.List<java.lang.String> getSourcePortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePrefixListsInput`<sup>Optional</sup> <a name="sourcePrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts"></a>

```java
public java.util.List<java.lang.String> getSourcePorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList;

new Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>>

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference;

new Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResources` <a name="resetResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsList <a name="Ec2NetworkInsightsAccessScopeMatchPathsList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsList;

new Ec2NetworkInsightsAccessScopeMatchPathsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPaths> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>>

---


### Ec2NetworkInsightsAccessScopeMatchPathsOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference;

new Ec2NetworkInsightsAccessScopeMatchPathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putDestination"></a>

```java
public void putDestination(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putSource"></a>

```java
public void putSource(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putSource.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList">Ec2NetworkInsightsAccessScopeMatchPathsSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destinationInput">destinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.sourceInput">sourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destination"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsDestinationList getDestination();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.source"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsSourceList getSource();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList">Ec2NetworkInsightsAccessScopeMatchPathsSourceList</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destinationInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsDestination> getDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.sourceInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSource> getSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeMatchPaths getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourceList <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList;

new Ec2NetworkInsightsAccessScopeMatchPathsSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSource> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>>

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference;

new Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putPacketHeaderStatement">putPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putResourceStatement">putResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetPacketHeaderStatement">resetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetResourceStatement">resetResourceStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPacketHeaderStatement` <a name="putPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putPacketHeaderStatement"></a>

```java
public void putPacketHeaderStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>>

---

##### `putResourceStatement` <a name="putResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putResourceStatement"></a>

```java
public void putResourceStatement(IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>>

---

##### `resetPacketHeaderStatement` <a name="resetPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetPacketHeaderStatement"></a>

```java
public void resetPacketHeaderStatement()
```

##### `resetResourceStatement` <a name="resetResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetResourceStatement"></a>

```java
public void resetResourceStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatementInput">packetHeaderStatementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatementInput">resourceStatementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatement"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList getPacketHeaderStatement();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatement"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList getResourceStatement();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList</a>

---

##### `packetHeaderStatementInput`<sup>Optional</sup> <a name="packetHeaderStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatementInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement> getPacketHeaderStatementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>>

---

##### `resourceStatementInput`<sup>Optional</sup> <a name="resourceStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatementInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement> getResourceStatementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeMatchPathsSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList;

new Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>>

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference;

new Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts">resetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists">resetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePorts">resetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists">resetSourcePrefixLists</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```java
public void resetDestinationAddresses()
```

##### `resetDestinationPorts` <a name="resetDestinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```java
public void resetDestinationPorts()
```

##### `resetDestinationPrefixLists` <a name="resetDestinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```java
public void resetDestinationPrefixLists()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```java
public void resetSourceAddresses()
```

##### `resetSourcePorts` <a name="resetSourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePorts"></a>

```java
public void resetSourcePorts()
```

##### `resetSourcePrefixLists` <a name="resetSourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```java
public void resetSourcePrefixLists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput">destinationPrefixListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput">sourcePortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput">sourcePrefixListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```java
public java.util.List<java.lang.String> getDestinationAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPrefixListsInput`<sup>Optional</sup> <a name="destinationPrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```java
public java.util.List<java.lang.String> getSourceAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePortsInput`<sup>Optional</sup> <a name="sourcePortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```java
public java.util.List<java.lang.String> getSourcePortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePrefixListsInput`<sup>Optional</sup> <a name="sourcePrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```java
public java.util.List<java.lang.String> getDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```java
public java.util.List<java.lang.String> getDestinationPrefixLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```java
public java.util.List<java.lang.String> getSourceAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePorts"></a>

```java
public java.util.List<java.lang.String> getSourcePorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```java
public java.util.List<java.lang.String> getSourcePrefixLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList;

new Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.get"></a>

```java
public Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>>

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_network_insights_access_scope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference;

new Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResources` <a name="resetResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>

---



