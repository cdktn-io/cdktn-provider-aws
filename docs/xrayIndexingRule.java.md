# `xrayIndexingRule` Submodule <a name="`xrayIndexingRule` Submodule" id="@cdktn/provider-aws.xrayIndexingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XrayIndexingRule <a name="XrayIndexingRule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule aws_xray_indexing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRule;

XrayIndexingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .region(java.lang.String)
//  .rule(IResolvable|java.util.List<XrayIndexingRuleRule>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#name XrayIndexingRule#name}. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>></code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#name XrayIndexingRule#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#region XrayIndexingRule#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.rule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#rule XrayIndexingRule#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<XrayIndexingRuleRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.putRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRule"></a>

```java
public void resetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a XrayIndexingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isConstruct"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRule;

XrayIndexingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRule;

XrayIndexingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRule;

XrayIndexingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRule;

XrayIndexingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),XrayIndexingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a XrayIndexingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the XrayIndexingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing XrayIndexingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the XrayIndexingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList">XrayIndexingRuleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.rule"></a>

```java
public XrayIndexingRuleRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList">XrayIndexingRuleRuleList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.ruleInput"></a>

```java
public IResolvable|java.util.List<XrayIndexingRuleRule> getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### XrayIndexingRuleConfig <a name="XrayIndexingRuleConfig" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRuleConfig;

XrayIndexingRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .region(java.lang.String)
//  .rule(IResolvable|java.util.List<XrayIndexingRuleRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#name XrayIndexingRule#name}. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>></code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#name XrayIndexingRule#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#region XrayIndexingRule#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.rule"></a>

```java
public IResolvable|java.util.List<XrayIndexingRuleRule> getRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#rule XrayIndexingRule#rule}

---

### XrayIndexingRuleRule <a name="XrayIndexingRuleRule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule.Initializer"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRuleRule;

XrayIndexingRuleRule.builder()
//  .probabilistic(IResolvable|java.util.List<XrayIndexingRuleRuleProbabilistic>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule.property.probabilistic">probabilistic</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>></code> | probabilistic block. |

---

##### `probabilistic`<sup>Optional</sup> <a name="probabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule.property.probabilistic"></a>

```java
public IResolvable|java.util.List<XrayIndexingRuleRuleProbabilistic> getProbabilistic();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>>

probabilistic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#probabilistic XrayIndexingRule#probabilistic}

---

### XrayIndexingRuleRuleProbabilistic <a name="XrayIndexingRuleRuleProbabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic.Initializer"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRuleRuleProbabilistic;

XrayIndexingRuleRuleProbabilistic.builder()
    .desiredSamplingPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic.property.desiredSamplingPercentage">desiredSamplingPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#desired_sampling_percentage XrayIndexingRule#desired_sampling_percentage}. |

---

##### `desiredSamplingPercentage`<sup>Required</sup> <a name="desiredSamplingPercentage" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic.property.desiredSamplingPercentage"></a>

```java
public java.lang.Number getDesiredSamplingPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/xray_indexing_rule#desired_sampling_percentage XrayIndexingRule#desired_sampling_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### XrayIndexingRuleRuleList <a name="XrayIndexingRuleRuleList" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRuleRuleList;

new XrayIndexingRuleRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.get"></a>

```java
public XrayIndexingRuleRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<XrayIndexingRuleRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>>

---


### XrayIndexingRuleRuleOutputReference <a name="XrayIndexingRuleRuleOutputReference" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRuleRuleOutputReference;

new XrayIndexingRuleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.putProbabilistic">putProbabilistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resetProbabilistic">resetProbabilistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProbabilistic` <a name="putProbabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.putProbabilistic"></a>

```java
public void putProbabilistic(IResolvable|java.util.List<XrayIndexingRuleRuleProbabilistic> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.putProbabilistic.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>>

---

##### `resetProbabilistic` <a name="resetProbabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resetProbabilistic"></a>

```java
public void resetProbabilistic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilistic">probabilistic</a></code> | <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList">XrayIndexingRuleRuleProbabilisticList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilisticInput">probabilisticInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `probabilistic`<sup>Required</sup> <a name="probabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilistic"></a>

```java
public XrayIndexingRuleRuleProbabilisticList getProbabilistic();
```

- *Type:* <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList">XrayIndexingRuleRuleProbabilisticList</a>

---

##### `probabilisticInput`<sup>Optional</sup> <a name="probabilisticInput" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilisticInput"></a>

```java
public IResolvable|java.util.List<XrayIndexingRuleRuleProbabilistic> getProbabilisticInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|XrayIndexingRuleRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>

---


### XrayIndexingRuleRuleProbabilisticList <a name="XrayIndexingRuleRuleProbabilisticList" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRuleRuleProbabilisticList;

new XrayIndexingRuleRuleProbabilisticList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.get"></a>

```java
public XrayIndexingRuleRuleProbabilisticOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.internalValue"></a>

```java
public IResolvable|java.util.List<XrayIndexingRuleRuleProbabilistic> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>>

---


### XrayIndexingRuleRuleProbabilisticOutputReference <a name="XrayIndexingRuleRuleProbabilisticOutputReference" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.xray_indexing_rule.XrayIndexingRuleRuleProbabilisticOutputReference;

new XrayIndexingRuleRuleProbabilisticOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.actualSamplingPercentage">actualSamplingPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentageInput">desiredSamplingPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentage">desiredSamplingPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actualSamplingPercentage`<sup>Required</sup> <a name="actualSamplingPercentage" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.actualSamplingPercentage"></a>

```java
public java.lang.Number getActualSamplingPercentage();
```

- *Type:* java.lang.Number

---

##### `desiredSamplingPercentageInput`<sup>Optional</sup> <a name="desiredSamplingPercentageInput" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentageInput"></a>

```java
public java.lang.Number getDesiredSamplingPercentageInput();
```

- *Type:* java.lang.Number

---

##### `desiredSamplingPercentage`<sup>Required</sup> <a name="desiredSamplingPercentage" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentage"></a>

```java
public java.lang.Number getDesiredSamplingPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.internalValue"></a>

```java
public IResolvable|XrayIndexingRuleRuleProbabilistic getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>

---



