# `resourcegroupsGroup` Submodule <a name="`resourcegroupsGroup` Submodule" id="@cdktn/provider-aws.resourcegroupsGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcegroupsGroup <a name="ResourcegroupsGroup" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group aws_resourcegroups_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroup;

ResourcegroupsGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .configuration(IResolvable|java.util.List<ResourcegroupsGroupConfiguration>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .resourceQuery(ResourcegroupsGroupResourceQuery)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ResourcegroupsGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.configuration">configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#description ResourcegroupsGroup#description}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#id ResourcegroupsGroup#id}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.resourceQuery">resourceQuery</a></code> | <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | resource_query block. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.configuration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#configuration ResourcegroupsGroup#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#description ResourcegroupsGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#id ResourcegroupsGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#region ResourcegroupsGroup#region}

---

##### `resourceQuery`<sup>Optional</sup> <a name="resourceQuery" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.resourceQuery"></a>

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

resource_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#resource_query ResourcegroupsGroup#resource_query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#timeouts ResourcegroupsGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery">putResourceQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetResourceQuery">resetResourceQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putConfiguration"></a>

```java
public void putConfiguration(IResolvable|java.util.List<ResourcegroupsGroupConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>>

---

##### `putResourceQuery` <a name="putResourceQuery" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery"></a>

```java
public void putResourceQuery(ResourcegroupsGroupResourceQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putTimeouts"></a>

```java
public void putTimeouts(ResourcegroupsGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourceQuery` <a name="resetResourceQuery" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetResourceQuery"></a>

```java
public void resetResourceQuery()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourcegroupsGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isConstruct"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroup;

ResourcegroupsGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroup;

ResourcegroupsGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroup;

ResourcegroupsGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroup;

ResourcegroupsGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourcegroupsGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ResourcegroupsGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourcegroupsGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourcegroupsGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ResourcegroupsGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList">ResourcegroupsGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQuery">resourceQuery</a></code> | <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference">ResourcegroupsGroupResourceQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference">ResourcegroupsGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQueryInput">resourceQueryInput</a></code> | <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.configuration"></a>

```java
public ResourcegroupsGroupConfigurationList getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList">ResourcegroupsGroupConfigurationList</a>

---

##### `resourceQuery`<sup>Required</sup> <a name="resourceQuery" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQuery"></a>

```java
public ResourcegroupsGroupResourceQueryOutputReference getResourceQuery();
```

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference">ResourcegroupsGroupResourceQueryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.timeouts"></a>

```java
public ResourcegroupsGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference">ResourcegroupsGroupTimeoutsOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.configurationInput"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfiguration> getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceQueryInput`<sup>Optional</sup> <a name="resourceQueryInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQueryInput"></a>

```java
public ResourcegroupsGroupResourceQuery getResourceQueryInput();
```

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.timeoutsInput"></a>

```java
public IResolvable|ResourcegroupsGroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcegroupsGroupConfig <a name="ResourcegroupsGroupConfig" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroupConfig;

ResourcegroupsGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .configuration(IResolvable|java.util.List<ResourcegroupsGroupConfiguration>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .resourceQuery(ResourcegroupsGroupResourceQuery)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ResourcegroupsGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.configuration">configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#description ResourcegroupsGroup#description}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#id ResourcegroupsGroup#id}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.resourceQuery">resourceQuery</a></code> | <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | resource_query block. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.configuration"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfiguration> getConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#configuration ResourcegroupsGroup#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#description ResourcegroupsGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#id ResourcegroupsGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#region ResourcegroupsGroup#region}

---

##### `resourceQuery`<sup>Optional</sup> <a name="resourceQuery" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.resourceQuery"></a>

```java
public ResourcegroupsGroupResourceQuery getResourceQuery();
```

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

resource_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#resource_query ResourcegroupsGroup#resource_query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.timeouts"></a>

```java
public ResourcegroupsGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#timeouts ResourcegroupsGroup#timeouts}

---

### ResourcegroupsGroupConfiguration <a name="ResourcegroupsGroupConfiguration" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroupConfiguration;

ResourcegroupsGroupConfiguration.builder()
    .type(java.lang.String)
//  .parameters(IResolvable|java.util.List<ResourcegroupsGroupConfigurationParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>></code> | parameters block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.parameters"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfigurationParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#parameters ResourcegroupsGroup#parameters}

---

### ResourcegroupsGroupConfigurationParameters <a name="ResourcegroupsGroupConfigurationParameters" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroupConfigurationParameters;

ResourcegroupsGroupConfigurationParameters.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#values ResourcegroupsGroup#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#values ResourcegroupsGroup#values}.

---

### ResourcegroupsGroupResourceQuery <a name="ResourcegroupsGroupResourceQuery" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroupResourceQuery;

ResourcegroupsGroupResourceQuery.builder()
    .query(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#query ResourcegroupsGroup#query}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#query ResourcegroupsGroup#query}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}.

---

### ResourcegroupsGroupTimeouts <a name="ResourcegroupsGroupTimeouts" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroupTimeouts;

ResourcegroupsGroupTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#create ResourcegroupsGroup#create}. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#update ResourcegroupsGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#create ResourcegroupsGroup#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/resourcegroups_group#update ResourcegroupsGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcegroupsGroupConfigurationList <a name="ResourcegroupsGroupConfigurationList" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroupConfigurationList;

new ResourcegroupsGroupConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.get"></a>

```java
public ResourcegroupsGroupConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>>

---


### ResourcegroupsGroupConfigurationOutputReference <a name="ResourcegroupsGroupConfigurationOutputReference" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroupConfigurationOutputReference;

new ResourcegroupsGroupConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<ResourcegroupsGroupConfigurationParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>>

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList">ResourcegroupsGroupConfigurationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parameters"></a>

```java
public ResourcegroupsGroupConfigurationParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList">ResourcegroupsGroupConfigurationParametersList</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfigurationParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourcegroupsGroupConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>

---


### ResourcegroupsGroupConfigurationParametersList <a name="ResourcegroupsGroupConfigurationParametersList" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroupConfigurationParametersList;

new ResourcegroupsGroupConfigurationParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.get"></a>

```java
public ResourcegroupsGroupConfigurationParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfigurationParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>>

---


### ResourcegroupsGroupConfigurationParametersOutputReference <a name="ResourcegroupsGroupConfigurationParametersOutputReference" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroupConfigurationParametersOutputReference;

new ResourcegroupsGroupConfigurationParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourcegroupsGroupConfigurationParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>

---


### ResourcegroupsGroupResourceQueryOutputReference <a name="ResourcegroupsGroupResourceQueryOutputReference" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroupResourceQueryOutputReference;

new ResourcegroupsGroupResourceQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.internalValue"></a>

```java
public ResourcegroupsGroupResourceQuery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

---


### ResourcegroupsGroupTimeoutsOutputReference <a name="ResourcegroupsGroupTimeoutsOutputReference" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.resourcegroups_group.ResourcegroupsGroupTimeoutsOutputReference;

new ResourcegroupsGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourcegroupsGroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a>

---



