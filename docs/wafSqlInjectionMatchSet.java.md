# `wafSqlInjectionMatchSet` Submodule <a name="`wafSqlInjectionMatchSet` Submodule" id="@cdktn/provider-aws.wafSqlInjectionMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafSqlInjectionMatchSet <a name="WafSqlInjectionMatchSet" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set aws_waf_sql_injection_match_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer"></a>

```java
import io.cdktn.providers.aws.waf_sql_injection_match_set.WafSqlInjectionMatchSet;

WafSqlInjectionMatchSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .sqlInjectionMatchTuples(IResolvable|java.util.List<WafSqlInjectionMatchSetSqlInjectionMatchTuples>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.sqlInjectionMatchTuples">sqlInjectionMatchTuples</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>></code> | sql_injection_match_tuples block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sqlInjectionMatchTuples`<sup>Optional</sup> <a name="sqlInjectionMatchTuples" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.sqlInjectionMatchTuples"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>>

sql_injection_match_tuples block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#sql_injection_match_tuples WafSqlInjectionMatchSet#sql_injection_match_tuples}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples">putSqlInjectionMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetSqlInjectionMatchTuples">resetSqlInjectionMatchTuples</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSqlInjectionMatchTuples` <a name="putSqlInjectionMatchTuples" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples"></a>

```java
public void putSqlInjectionMatchTuples(IResolvable|java.util.List<WafSqlInjectionMatchSetSqlInjectionMatchTuples> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetId"></a>

```java
public void resetId()
```

##### `resetSqlInjectionMatchTuples` <a name="resetSqlInjectionMatchTuples" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetSqlInjectionMatchTuples"></a>

```java
public void resetSqlInjectionMatchTuples()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WafSqlInjectionMatchSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct"></a>

```java
import io.cdktn.providers.aws.waf_sql_injection_match_set.WafSqlInjectionMatchSet;

WafSqlInjectionMatchSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.waf_sql_injection_match_set.WafSqlInjectionMatchSet;

WafSqlInjectionMatchSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.waf_sql_injection_match_set.WafSqlInjectionMatchSet;

WafSqlInjectionMatchSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.waf_sql_injection_match_set.WafSqlInjectionMatchSet;

WafSqlInjectionMatchSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WafSqlInjectionMatchSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WafSqlInjectionMatchSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WafSqlInjectionMatchSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WafSqlInjectionMatchSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WafSqlInjectionMatchSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuples">sqlInjectionMatchTuples</a></code> | <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList">WafSqlInjectionMatchSetSqlInjectionMatchTuplesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuplesInput">sqlInjectionMatchTuplesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `sqlInjectionMatchTuples`<sup>Required</sup> <a name="sqlInjectionMatchTuples" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuples"></a>

```java
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesList getSqlInjectionMatchTuples();
```

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList">WafSqlInjectionMatchSetSqlInjectionMatchTuplesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sqlInjectionMatchTuplesInput`<sup>Optional</sup> <a name="sqlInjectionMatchTuplesInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuplesInput"></a>

```java
public IResolvable|java.util.List<WafSqlInjectionMatchSetSqlInjectionMatchTuples> getSqlInjectionMatchTuplesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafSqlInjectionMatchSetConfig <a name="WafSqlInjectionMatchSetConfig" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.waf_sql_injection_match_set.WafSqlInjectionMatchSetConfig;

WafSqlInjectionMatchSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .sqlInjectionMatchTuples(IResolvable|java.util.List<WafSqlInjectionMatchSetSqlInjectionMatchTuples>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuples">sqlInjectionMatchTuples</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>></code> | sql_injection_match_tuples block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sqlInjectionMatchTuples`<sup>Optional</sup> <a name="sqlInjectionMatchTuples" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuples"></a>

```java
public IResolvable|java.util.List<WafSqlInjectionMatchSetSqlInjectionMatchTuples> getSqlInjectionMatchTuples();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>>

sql_injection_match_tuples block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#sql_injection_match_tuples WafSqlInjectionMatchSet#sql_injection_match_tuples}

---

### WafSqlInjectionMatchSetSqlInjectionMatchTuples <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuples" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.Initializer"></a>

```java
import io.cdktn.providers.aws.waf_sql_injection_match_set.WafSqlInjectionMatchSetSqlInjectionMatchTuples;

WafSqlInjectionMatchSetSqlInjectionMatchTuples.builder()
    .fieldToMatch(WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch)
    .textTransformation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.textTransformation">textTransformation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#text_transformation WafSqlInjectionMatchSet#text_transformation}. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.fieldToMatch"></a>

```java
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch getFieldToMatch();
```

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#field_to_match WafSqlInjectionMatchSet#field_to_match}

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.textTransformation"></a>

```java
public java.lang.String getTextTransformation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#text_transformation WafSqlInjectionMatchSet#text_transformation}.

---

### WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.Initializer"></a>

```java
import io.cdktn.providers.aws.waf_sql_injection_match_set.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch;

WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.builder()
    .type(java.lang.String)
//  .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#type WafSqlInjectionMatchSet#type}. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.data">data</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#data WafSqlInjectionMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#type WafSqlInjectionMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/waf_sql_injection_match_set#data WafSqlInjectionMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.waf_sql_injection_match_set.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference;

new WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resetData"></a>

```java
public void resetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.internalValue"></a>

```java
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---


### WafSqlInjectionMatchSetSqlInjectionMatchTuplesList <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesList" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer"></a>

```java
import io.cdktn.providers.aws.waf_sql_injection_match_set.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList;

new WafSqlInjectionMatchSetSqlInjectionMatchTuplesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get"></a>

```java
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WafSqlInjectionMatchSetSqlInjectionMatchTuples> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>>

---


### WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.waf_sql_injection_match_set.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference;

new WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch"></a>

```java
public void putFieldToMatch(WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformation">textTransformation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatch"></a>

```java
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference getFieldToMatch();
```

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatchInput"></a>

```java
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch getFieldToMatchInput();
```

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformationInput"></a>

```java
public java.lang.String getTextTransformationInput();
```

- *Type:* java.lang.String

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformation"></a>

```java
public java.lang.String getTextTransformation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.internalValue"></a>

```java
public IResolvable|WafSqlInjectionMatchSetSqlInjectionMatchTuples getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>

---



