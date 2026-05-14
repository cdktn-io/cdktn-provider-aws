# `codeartifactRepository` Submodule <a name="`codeartifactRepository` Submodule" id="@cdktn/provider-aws.codeartifactRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactRepository <a name="CodeartifactRepository" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository aws_codeartifact_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer"></a>

```java
import io.cdktn.providers.aws.codeartifact_repository.CodeartifactRepository;

CodeartifactRepository.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domain(java.lang.String)
    .repository(java.lang.String)
//  .description(java.lang.String)
//  .domainOwner(java.lang.String)
//  .externalConnections(CodeartifactRepositoryExternalConnections)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .upstream(IResolvable|java.util.List<CodeartifactRepositoryUpstream>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#domain CodeartifactRepository#domain}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#repository CodeartifactRepository#repository}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#description CodeartifactRepository#description}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.externalConnections">externalConnections</a></code> | <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | external_connections block. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#id CodeartifactRepository#id}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#tags CodeartifactRepository#tags}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#tags_all CodeartifactRepository#tags_all}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.upstream">upstream</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>></code> | upstream block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#domain CodeartifactRepository#domain}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#repository CodeartifactRepository#repository}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#description CodeartifactRepository#description}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.domainOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}.

---

##### `externalConnections`<sup>Optional</sup> <a name="externalConnections" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.externalConnections"></a>

- *Type:* <a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

external_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#external_connections CodeartifactRepository#external_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#id CodeartifactRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#region CodeartifactRepository#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#tags CodeartifactRepository#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#tags_all CodeartifactRepository#tags_all}.

---

##### `upstream`<sup>Optional</sup> <a name="upstream" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.upstream"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>>

upstream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#upstream CodeartifactRepository#upstream}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections">putExternalConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream">putUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetDomainOwner">resetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetExternalConnections">resetExternalConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetUpstream">resetUpstream</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalConnections` <a name="putExternalConnections" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections"></a>

```java
public void putExternalConnections(CodeartifactRepositoryExternalConnections value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

---

##### `putUpstream` <a name="putUpstream" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream"></a>

```java
public void putUpstream(IResolvable|java.util.List<CodeartifactRepositoryUpstream> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDomainOwner` <a name="resetDomainOwner" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetDomainOwner"></a>

```java
public void resetDomainOwner()
```

##### `resetExternalConnections` <a name="resetExternalConnections" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetExternalConnections"></a>

```java
public void resetExternalConnections()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetUpstream` <a name="resetUpstream" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.resetUpstream"></a>

```java
public void resetUpstream()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodeartifactRepository resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct"></a>

```java
import io.cdktn.providers.aws.codeartifact_repository.CodeartifactRepository;

CodeartifactRepository.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.codeartifact_repository.CodeartifactRepository;

CodeartifactRepository.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.codeartifact_repository.CodeartifactRepository;

CodeartifactRepository.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.codeartifact_repository.CodeartifactRepository;

CodeartifactRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodeartifactRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CodeartifactRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodeartifactRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodeartifactRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CodeartifactRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.administratorAccount">administratorAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnections">externalConnections</a></code> | <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference">CodeartifactRepositoryExternalConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstream">upstream</a></code> | <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList">CodeartifactRepositoryUpstreamList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwnerInput">domainOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnectionsInput">externalConnectionsInput</a></code> | <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstreamInput">upstreamInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `administratorAccount`<sup>Required</sup> <a name="administratorAccount" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.administratorAccount"></a>

```java
public java.lang.String getAdministratorAccount();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `externalConnections`<sup>Required</sup> <a name="externalConnections" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnections"></a>

```java
public CodeartifactRepositoryExternalConnectionsOutputReference getExternalConnections();
```

- *Type:* <a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference">CodeartifactRepositoryExternalConnectionsOutputReference</a>

---

##### `upstream`<sup>Required</sup> <a name="upstream" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstream"></a>

```java
public CodeartifactRepositoryUpstreamList getUpstream();
```

- *Type:* <a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList">CodeartifactRepositoryUpstreamList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domainOwnerInput`<sup>Optional</sup> <a name="domainOwnerInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwnerInput"></a>

```java
public java.lang.String getDomainOwnerInput();
```

- *Type:* java.lang.String

---

##### `externalConnectionsInput`<sup>Optional</sup> <a name="externalConnectionsInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnectionsInput"></a>

```java
public CodeartifactRepositoryExternalConnections getExternalConnectionsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `upstreamInput`<sup>Optional</sup> <a name="upstreamInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstreamInput"></a>

```java
public IResolvable|java.util.List<CodeartifactRepositoryUpstream> getUpstreamInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `domainOwner`<sup>Required</sup> <a name="domainOwner" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwner"></a>

```java
public java.lang.String getDomainOwner();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepository.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactRepositoryConfig <a name="CodeartifactRepositoryConfig" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.codeartifact_repository.CodeartifactRepositoryConfig;

CodeartifactRepositoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domain(java.lang.String)
    .repository(java.lang.String)
//  .description(java.lang.String)
//  .domainOwner(java.lang.String)
//  .externalConnections(CodeartifactRepositoryExternalConnections)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .upstream(IResolvable|java.util.List<CodeartifactRepositoryUpstream>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#domain CodeartifactRepository#domain}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#repository CodeartifactRepository#repository}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#description CodeartifactRepository#description}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.externalConnections">externalConnections</a></code> | <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | external_connections block. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#id CodeartifactRepository#id}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#tags CodeartifactRepository#tags}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#tags_all CodeartifactRepository#tags_all}. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.upstream">upstream</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>></code> | upstream block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#domain CodeartifactRepository#domain}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#repository CodeartifactRepository#repository}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#description CodeartifactRepository#description}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domainOwner"></a>

```java
public java.lang.String getDomainOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}.

---

##### `externalConnections`<sup>Optional</sup> <a name="externalConnections" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.externalConnections"></a>

```java
public CodeartifactRepositoryExternalConnections getExternalConnections();
```

- *Type:* <a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

external_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#external_connections CodeartifactRepository#external_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#id CodeartifactRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#region CodeartifactRepository#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#tags CodeartifactRepository#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#tags_all CodeartifactRepository#tags_all}.

---

##### `upstream`<sup>Optional</sup> <a name="upstream" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.upstream"></a>

```java
public IResolvable|java.util.List<CodeartifactRepositoryUpstream> getUpstream();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>>

upstream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#upstream CodeartifactRepository#upstream}

---

### CodeartifactRepositoryExternalConnections <a name="CodeartifactRepositoryExternalConnections" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.Initializer"></a>

```java
import io.cdktn.providers.aws.codeartifact_repository.CodeartifactRepositoryExternalConnections;

CodeartifactRepositoryExternalConnections.builder()
    .externalConnectionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.property.externalConnectionName">externalConnectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#external_connection_name CodeartifactRepository#external_connection_name}. |

---

##### `externalConnectionName`<sup>Required</sup> <a name="externalConnectionName" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.property.externalConnectionName"></a>

```java
public java.lang.String getExternalConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#external_connection_name CodeartifactRepository#external_connection_name}.

---

### CodeartifactRepositoryUpstream <a name="CodeartifactRepositoryUpstream" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.Initializer"></a>

```java
import io.cdktn.providers.aws.codeartifact_repository.CodeartifactRepositoryUpstream;

CodeartifactRepositoryUpstream.builder()
    .repositoryName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#repository_name CodeartifactRepository#repository_name}. |

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/codeartifact_repository#repository_name CodeartifactRepository#repository_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodeartifactRepositoryExternalConnectionsOutputReference <a name="CodeartifactRepositoryExternalConnectionsOutputReference" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.codeartifact_repository.CodeartifactRepositoryExternalConnectionsOutputReference;

new CodeartifactRepositoryExternalConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.packageFormat">packageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionNameInput">externalConnectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionName">externalConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageFormat`<sup>Required</sup> <a name="packageFormat" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.packageFormat"></a>

```java
public java.lang.String getPackageFormat();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `externalConnectionNameInput`<sup>Optional</sup> <a name="externalConnectionNameInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionNameInput"></a>

```java
public java.lang.String getExternalConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `externalConnectionName`<sup>Required</sup> <a name="externalConnectionName" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionName"></a>

```java
public java.lang.String getExternalConnectionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.internalValue"></a>

```java
public CodeartifactRepositoryExternalConnections getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

---


### CodeartifactRepositoryUpstreamList <a name="CodeartifactRepositoryUpstreamList" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer"></a>

```java
import io.cdktn.providers.aws.codeartifact_repository.CodeartifactRepositoryUpstreamList;

new CodeartifactRepositoryUpstreamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get"></a>

```java
public CodeartifactRepositoryUpstreamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CodeartifactRepositoryUpstream> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>>

---


### CodeartifactRepositoryUpstreamOutputReference <a name="CodeartifactRepositoryUpstreamOutputReference" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.codeartifact_repository.CodeartifactRepositoryUpstreamOutputReference;

new CodeartifactRepositoryUpstreamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryNameInput"></a>

```java
public java.lang.String getRepositoryNameInput();
```

- *Type:* java.lang.String

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.internalValue"></a>

```java
public IResolvable|CodeartifactRepositoryUpstream getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>

---



